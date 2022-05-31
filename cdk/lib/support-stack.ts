import cdk = require('aws-cdk-lib');
import awsExports from "../../src/aws-exports.js";
import { Construct } from 'constructs';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as CustomResources from 'aws-cdk-lib/custom-resources'
import * as iam from 'aws-cdk-lib/aws-iam'

export class SupportStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const newUserAddedFunction = new Function(this, 'NewUserAddedFunction', {
        runtime: Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: Code.fromAsset('resources/lambda/newUserAdded'),
        environment: {
            region: cdk.Stack.of(this).region,
            availabilityZones: JSON.stringify(cdk.Stack.of(this).availabilityZones),
            aws_appsync_graphqlEndpoint: awsExports.aws_appsync_graphqlEndpoint,
        },
    });

    const userPool = cognito.UserPool.fromUserPoolId(this, 'UserPool', awsExports.aws_user_pools_id);
    // userPool.addTrigger(cognito.UserPoolOperation.POST_AUTHENTICATION, newUserAddedFunction);

    new CustomResources.AwsCustomResource(this, "UpdateUserPool", {
        resourceType: "Custom::UpdateUserPool",
        onCreate: {
          region: this.region,
          service: "CognitoIdentityServiceProvider",
          action: "updateUserPool",
          parameters: {
            UserPoolId: userPool.userPoolId,
            LambdaConfig: {
              postAuthentication: newUserAddedFunction.functionArn,
            },
          },
          physicalResourceId: CustomResources.PhysicalResourceId.of(userPool.userPoolId),
        },
        policy: CustomResources.AwsCustomResourcePolicy.fromSdkCalls({ resources: CustomResources.AwsCustomResourcePolicy.ANY_RESOURCE }),
    });

    const invokeCognitoTriggerPermission = {
        principal: new iam.ServicePrincipal('cognito-idp.amazonaws.com'),
        sourceArn: userPool.userPoolArn
    }

    newUserAddedFunction.addPermission('InvokePostAuthenticationFunctionPermission', invokeCognitoTriggerPermission)
  }
}