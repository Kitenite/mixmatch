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

async function createUser(userAttributes){
    const graphqlClient = makeClient()
    const mutation = gql(`
        mutation createUser($input: CreateUserInput!) {
            createUser(input: $input) {
                id
                name
                email
            }
        }`)
    const resp = await graphqlClient.mutate({
        mutation: mutation,
        variables: {
            input:{
                id: userAttributes.sub,
                name: userAttributes.name,
                email: userAttributes.email
            }
        }
    });
    return resp
}

exports.handler = async (event, context) => {
    console.log(event);
    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {
        const response = await createUser(event.request.userAttributes)
        console.log(response)
        context.done(null, event);
    } else {
        // Nothing to do, the user's email ID is unknown
        context.fail("event.request.userAttributes.sub was not found")
    }
};
