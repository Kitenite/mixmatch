import argparse
import os
import shutil
import numpy as np

import dnnlib
import dnnlib.tflib as tflib
import pretrained_networks
import projector
import dataset_tool

import PIL.Image
from encoder.generator_model import Generator

def interpolate_points(p1, p2):

	vectors = list()
	for i in range(len(p1)):
		v = (1.0 - 0.5) * p1[i] + 0.5 * p2[i]
		vectors.append(v)
	return np.asarray(vectors)


def main():

    parser = argparse.ArgumentParser(description='Project real-world images into StyleGAN2 latent space')
    parser.add_argument('src_dir', help='Directory with aligned images for projection')
    parser.add_argument('dst_dir', help='Output directory')
    parser.add_argument('--network-pkl', default='gdrive:networks/stylegan2-ffhq-config-f.pkl', help='StyleGAN2 network pickle filename')
    parser.add_argument('--batch_size', default=1, help='Batch size for generator and perceptual model', type=int)

    args = parser.parse_args()

    # Get dlatents
    dlatent_dir = args.src_dir
    dlatents = []
    for dlatent_name in [f for f in os.listdir(dlatent_dir) if f[0] not in '._']:
        dlatent = np.load(os.path.join(dlatent_dir, dlatent_name))
        dlatents.append(dlatent)
    d1 = dlatents[0]
    d2 = dlatents[1]
    shape = d1.shape
    # Get interpolated result
    inter = interpolate_points(d1.flatten(), d2.flatten())
    mixed_dlatents = inter.reshape(-1, shape[0], shape[1])

    # Create gerator
    print('Loading networks from "%s"...' % args.network_pkl)
    _G, _D, Gs = pretrained_networks.load_networks(args.network_pkl)

    generator = Generator(Gs, args.batch_size)
    # print(generator.get_dlatents(), "\n\n")
    generator.set_dlatents(mixed_dlatents)
    # print(generator.get_dlatents(), "\n\n")

    generated_images = generator.generate_images()
    generated_dlatents = generator.get_dlatents()

    # temp names
    names = ["1", "2"]
    for img_array, dlatent, img_name in zip(generated_images, generated_dlatents, names):
        img = PIL.Image.fromarray(img_array, 'RGB')
        img.save(os.path.join(args.dst_dir, f'{img_name}.png'), 'PNG')
        # np.save(os.path.join(args.dlatent_dir, f'{img_name}.npy'), dlatent)

    
    generator.reset_dlatents()
    

if __name__ == '__main__':
    main()