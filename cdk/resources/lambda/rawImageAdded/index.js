// This AWS Lambda function forwards the given event data into an Amazon SQS queue, then starts an Amazon ECS task to
// process that event.
const fs = require('fs');
const aws = require('aws-sdk');
const sqs = new aws.SQS({apiVersion: '2012-11-05'});

// GraphQL
const appsync = require('aws-appsync');
const gql = require('graphql-tag');
require('cross-fetch/polyfill');

function makeClient(){
    const APPSYNC_ENDPOINT = 'https://spqnnxbnyza2pl3tzpwagy5t7q.appsync-api.us-east-1.amazonaws.com/graphql'
    const graphqlClient = new appsync.AWSAppSyncClient({
        url: APPSYNC_ENDPOINT,
        region: process.env.AWS_REGION,
        auth: {
            type: 'AWS_IAM',
            credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            sessionToken: process.env.AWS_SESSION_TOKEN
            }
        },
        disableOffline: true
    });
    return graphqlClient
}

async function updateUserTable(key, updateItemKey){
    console.log(`Updating client key ${updateItemKey} with ${key}`)
    const userID = key.split("/")[1]
    const graphqlClient = makeClient()
    const mutation = gql(`
        mutation updateUser($input: UpdateUserInput!) {
            updateUser(input: $input) {
                id
                ${updateItemKey}
            }
        }`)
    const resp = await graphqlClient.mutate({
        mutation: mutation,
        variables: {
            input:{
                id: userID,
                [updateItemKey]:key
            }
        }
    })
    console.log("Reponse: ", resp)
}

async function processRawImage(event, context){
    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    const params = {
        MessageBody: JSON.stringify(event),
        QueueUrl: config.queue
    };
    try {
        await sqs.sendMessage(params).promise().then(()=>{
            console.log("Message sent: ", params)
        })
    } catch(err){
        console.log("Error sending message: ", err)
    }
    
}

exports.handler = async (event, context) => {
    console.log(event)
    // Get S3 uploaded item and process
    const key = event.Records[0].s3.object.key;
    const matchArray = key.split('/')

    if(matchArray.length<=3){
        context.fail(`File: ${key} key lenght unexpected ${matchArray.length}`)
    }
    const matchString =  matchArray.slice(2).join('/').trim()
    switch (matchString){
        case 'rawImage/rawImage.png':
            await updateUserTable(key, 'rawImage')
            await processRawImage(event, context)
            break
        case 'alignedImage/alignedImage.png':
            await updateUserTable(key, 'alignedImage')
            break
        case 'encoding/encoding.npy':
            await updateUserTable(key, 'encoding')
            break
        default:
            context.fail(`File: ${key} is not a valid upload key`)
    }
};