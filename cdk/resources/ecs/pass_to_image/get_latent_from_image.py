import argparse
import os
import shutil
import numpy as np

import dnnlib
import dnnlib.tflib as tflib
import pretrained_networks
import projector
import dataset_tool
from training import dataset
from training import misc


def project_image(proj, src_file, dst_dir, tmp_dir):

    data_dir = '%s/dataset' % tmp_dir
    if os.path.exists(data_dir):
        shutil.rmtree(data_dir)
    image_dir = '%s/images' % data_dir
    tfrecord_dir = '%s/tfrecords' % data_dir
    os.makedirs(image_dir, exist_ok=True)
    shutil.copy(src_file, image_dir + '/')
    dataset_tool.create_from_images(tfrecord_dir, image_dir, shuffle=0)
    dataset_obj = dataset.load_dataset(
        data_dir=data_dir, tfrecord_dir='tfrecords',
        max_label_size=0, repeat=False, shuffle_mb=0
    )

    print('Projecting image "%s"...' % os.path.basename(src_file))
    images, _labels = dataset_obj.get_minibatch_np(1)
    images = misc.adjust_dynamic_range(images, [0, 255], [-1, 1])
    proj.start(images)
    while proj.get_cur_step() < proj.num_steps:
        print('\r%d / %d ... ' % (proj.get_cur_step(), proj.num_steps), end='', flush=True)
        proj.step()
        
    print('\r%-30s\r' % '', end='', flush=True)

    os.makedirs(dst_dir, exist_ok=True)
    filename = os.path.join(dst_dir, os.path.basename(src_file)[:-4] + '.npy')
    np.save(filename, proj.get_dlatents()[0])


def main():

    parser = argparse.ArgumentParser(description='Project real-world images into StyleGAN2 latent space')
    parser.add_argument('src_dir', help='Directory with aligned images for projection')
    parser.add_argument('dst_dir', help='Output directory')
    parser.add_argument('--tmp-dir', default='.stylegan2-tmp', help='Temporary directory for tfrecords and video frames')
    parser.add_argument('--network-pkl', default='gdrive:networks/stylegan2-ffhq-config-f.pkl', help='StyleGAN2 network pickle filename')
    parser.add_argument('--vgg16-pkl', default='https://drive.google.com/uc?id=1N2-m9qszOeVC9Tq77WxsLnuWwOedQiD2', help='VGG16 network pickle filename')
    parser.add_argument('--num-steps', type=int, default=1000, help='Number of optimization steps')
    parser.add_argument('--initial-learning-rate', type=float, default=0.1, help='Initial learning rate')
    parser.add_argument('--initial-noise-factor', type=float, default=0.05, help='Initial noise factor')
    parser.add_argument('--verbose', type=bool, default=False, help='Verbose output')
    args = parser.parse_args()

    print('Loading networks from "%s"...' % args.network_pkl)
    _G, _D, Gs = pretrained_networks.load_networks(args.network_pkl)
    proj = projector.Projector(
        vgg16_pkl             = args.vgg16_pkl,
        num_steps             = args.num_steps,
        initial_learning_rate = args.initial_learning_rate,
        initial_noise_factor  = args.initial_noise_factor,
        verbose               = args.verbose
    )
    proj.set_network(Gs)

    src_files = sorted([os.path.join(args.src_dir, f) for f in os.listdir(args.src_dir) if f[0] not in '._'])
    for src_file in src_files:
        project_image(proj, src_file, args.dst_dir, args.tmp_dir)
        shutil.rmtree(args.tmp_dir)


if __name__ == '__main__':
    main()