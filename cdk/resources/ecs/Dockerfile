FROM hoakiet98/stylegan2-ecs:0
RUN pip install awscli boto3
COPY ./pass_to_image/. ./stylegan2
WORKDIR /stylegan2
CMD [ "./ecs-worker.sh" ]