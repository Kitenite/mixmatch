"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAppStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cdk = require("aws-cdk-lib");
const aws_amplify_1 = require("aws-cdk-lib/aws-amplify");
const aws_cognito_1 = require("aws-cdk-lib/aws-cognito");
class WebAppStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Create cognito user pool and idendity pool
        const userPool = new aws_cognito_1.UserPool(this, "StyleganMixUserPool", {
            selfSignUpEnabled: true,
            autoVerify: { email: true },
            signInAliases: { email: true }
        });
        const userPoolClient = new aws_cognito_1.UserPoolClient(this, "StyleganMixUserPoolClient", {
            userPool,
            generateSecret: false
        });
        const idendityPool = new aws_cognito_1.CfnIdentityPool(this, "IdendityPool", {
            allowUnauthenticatedIdentities: true,
            cognitoIdentityProviders: [{
                    clientId: userPoolClient.userPoolClientId,
                    providerName: userPool.userPoolProviderName
                }]
        });
        // Create amplify app based on repository and branch.
        // This will watch for changes in the main branch
        const amplifyApp = new aws_amplify_1.CfnApp(this, 'webapp', {
            name: 'stylegan-mix-webapp',
            repository: 'https://github.com/Kitenite/stylegan-mix-webapp',
            oauthToken: aws_cdk_lib_1.SecretValue.secretsManager('github-oauth-token').unsafeUnwrap(),
            environmentVariables: [
                {
                    name: "IDENDITY_POOL_ID",
                    value: idendityPool.ref
                },
                {
                    name: "USER_POOL_ID",
                    value: userPool.userPoolId
                },
                {
                    name: "USER_POOL_CLIENT_ID",
                    value: userPoolClient.userPoolClientId
                },
                {
                    name: "REGION",
                    value: this.region
                }
            ]
        });
        new aws_amplify_1.CfnBranch(this, 'MasterBranch', {
            appId: amplifyApp.attrAppId,
            branchName: 'main',
        });
    }
}
exports.WebAppStack = WebAppStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYXBwLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ViYXBwLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUEwQztBQUMxQyxtQ0FBb0M7QUFDcEMseURBQTREO0FBQzVELHlEQUFvRjtBQUdwRixNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsS0FBSztJQUN4QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHNCQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3pELGlCQUFpQixFQUFFLElBQUk7WUFDdkIsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQztZQUN6QixhQUFhLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO1NBQzdCLENBQUMsQ0FBQTtRQUVGLE1BQU0sY0FBYyxHQUFHLElBQUksNEJBQWMsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLEVBQUU7WUFDM0UsUUFBUTtZQUNSLGNBQWMsRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtRQUVGLE1BQU0sWUFBWSxHQUFHLElBQUksNkJBQWUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQzdELDhCQUE4QixFQUFFLElBQUk7WUFDcEMsd0JBQXdCLEVBQUUsQ0FBQztvQkFDekIsUUFBUSxFQUFFLGNBQWMsQ0FBQyxnQkFBZ0I7b0JBQ3pDLFlBQVksRUFBRSxRQUFRLENBQUMsb0JBQW9CO2lCQUM1QyxDQUFDO1NBQ0gsQ0FBQyxDQUFBO1FBRUYscURBQXFEO1FBQ3JELGlEQUFpRDtRQUNqRCxNQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUM1QyxJQUFJLEVBQUUscUJBQXFCO1lBQzNCLFVBQVUsRUFBRSxpREFBaUQ7WUFDN0QsVUFBVSxFQUFFLHlCQUFXLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxFQUFFO1lBQzNFLG9CQUFvQixFQUFDO2dCQUNuQjtvQkFDRSxJQUFJLEVBQUMsa0JBQWtCO29CQUN2QixLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUc7aUJBQ3hCO2dCQUNEO29CQUNFLElBQUksRUFBQyxjQUFjO29CQUNuQixLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVU7aUJBQzNCO2dCQUNEO29CQUNFLElBQUksRUFBQyxxQkFBcUI7b0JBQzFCLEtBQUssRUFBRSxjQUFjLENBQUMsZ0JBQWdCO2lCQUN2QztnQkFDRDtvQkFDRSxJQUFJLEVBQUMsUUFBUTtvQkFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ25CO2FBQ0Y7U0FDRixDQUFDLENBQUE7UUFFRixJQUFJLHVCQUFTLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNsQyxLQUFLLEVBQUUsVUFBVSxDQUFDLFNBQVM7WUFDM0IsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBdkRELGtDQXVEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3JldFZhbHVlIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IGNkayA9IHJlcXVpcmUoJ2F3cy1jZGstbGliJyk7XG5pbXBvcnQgeyBDZm5BcHAsIENmbkJyYW5jaCB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hbXBsaWZ5JztcbmltcG9ydCB7IENmbklkZW50aXR5UG9vbCwgVXNlclBvb2wsIFVzZXJQb29sQ2xpZW50IH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWNvZ25pdG8nO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBXZWJBcHBTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIENyZWF0ZSBjb2duaXRvIHVzZXIgcG9vbCBhbmQgaWRlbmRpdHkgcG9vbFxuICAgIGNvbnN0IHVzZXJQb29sID0gbmV3IFVzZXJQb29sKHRoaXMsIFwiU3R5bGVnYW5NaXhVc2VyUG9vbFwiLCB7XG4gICAgICBzZWxmU2lnblVwRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGF1dG9WZXJpZnk6IHtlbWFpbDogdHJ1ZX0sXG4gICAgICBzaWduSW5BbGlhc2VzOiB7ZW1haWw6IHRydWV9XG4gICAgfSlcblxuICAgIGNvbnN0IHVzZXJQb29sQ2xpZW50ID0gbmV3IFVzZXJQb29sQ2xpZW50KHRoaXMsIFwiU3R5bGVnYW5NaXhVc2VyUG9vbENsaWVudFwiLCB7XG4gICAgICB1c2VyUG9vbCxcbiAgICAgIGdlbmVyYXRlU2VjcmV0OiBmYWxzZVxuICAgIH0pXG5cbiAgICBjb25zdCBpZGVuZGl0eVBvb2wgPSBuZXcgQ2ZuSWRlbnRpdHlQb29sKHRoaXMsIFwiSWRlbmRpdHlQb29sXCIsIHtcbiAgICAgIGFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllczogdHJ1ZSxcbiAgICAgIGNvZ25pdG9JZGVudGl0eVByb3ZpZGVyczogW3tcbiAgICAgICAgY2xpZW50SWQ6IHVzZXJQb29sQ2xpZW50LnVzZXJQb29sQ2xpZW50SWQsXG4gICAgICAgIHByb3ZpZGVyTmFtZTogdXNlclBvb2wudXNlclBvb2xQcm92aWRlck5hbWVcbiAgICAgIH1dXG4gICAgfSlcblxuICAgIC8vIENyZWF0ZSBhbXBsaWZ5IGFwcCBiYXNlZCBvbiByZXBvc2l0b3J5IGFuZCBicmFuY2guXG4gICAgLy8gVGhpcyB3aWxsIHdhdGNoIGZvciBjaGFuZ2VzIGluIHRoZSBtYWluIGJyYW5jaFxuICAgIGNvbnN0IGFtcGxpZnlBcHAgPSBuZXcgQ2ZuQXBwKHRoaXMsICd3ZWJhcHAnLCB7XG4gICAgICBuYW1lOiAnc3R5bGVnYW4tbWl4LXdlYmFwcCcsXG4gICAgICByZXBvc2l0b3J5OiAnaHR0cHM6Ly9naXRodWIuY29tL0tpdGVuaXRlL3N0eWxlZ2FuLW1peC13ZWJhcHAnLFxuICAgICAgb2F1dGhUb2tlbjogU2VjcmV0VmFsdWUuc2VjcmV0c01hbmFnZXIoJ2dpdGh1Yi1vYXV0aC10b2tlbicpLnVuc2FmZVVud3JhcCgpLFxuICAgICAgZW52aXJvbm1lbnRWYXJpYWJsZXM6W1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTpcIklERU5ESVRZX1BPT0xfSURcIixcbiAgICAgICAgICB2YWx1ZTogaWRlbmRpdHlQb29sLnJlZlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTpcIlVTRVJfUE9PTF9JRFwiLFxuICAgICAgICAgIHZhbHVlOiB1c2VyUG9vbC51c2VyUG9vbElkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOlwiVVNFUl9QT09MX0NMSUVOVF9JRFwiLFxuICAgICAgICAgIHZhbHVlOiB1c2VyUG9vbENsaWVudC51c2VyUG9vbENsaWVudElkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOlwiUkVHSU9OXCIsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucmVnaW9uXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuXG4gICAgbmV3IENmbkJyYW5jaCh0aGlzLCAnTWFzdGVyQnJhbmNoJywge1xuICAgICAgYXBwSWQ6IGFtcGxpZnlBcHAuYXR0ckFwcElkLFxuICAgICAgYnJhbmNoTmFtZTogJ21haW4nLFxuICAgIH0pXG4gIH1cbn0iXX0=