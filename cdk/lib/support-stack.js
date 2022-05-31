"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_exports_js_1 = require("../../src/aws-exports.js");
const lambda_1 = require("aws-cdk-lib/lambda");
class SupportStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const newUserAddedFunction = new lambda_1.Function(this, 'NewUserAddedFunction', {
            runtime: lambda_1.Runtime.NODEJS_16_X,
            handler: 'index.handler',
            code: lambda_1.Code.fromAsset('resources/lambda/newUserAdded'),
            environment: {
                region: cdk.Stack.of(this).region,
                availabilityZones: JSON.stringify(cdk.Stack.of(this).availabilityZones),
                aws_appsync_graphqlEndpoint: aws_exports_js_1.default.aws_appsync_graphqlEndpoint,
            },
        });
    }
}
exports.SupportStack = SupportStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1cHBvcnQtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW9DO0FBRXBDLDZEQUFrRDtBQUNsRCwrQ0FBNkQ7QUFFN0QsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDekMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLG9CQUFvQixHQUFHLElBQUksaUJBQVEsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7WUFDcEUsT0FBTyxFQUFFLGdCQUFPLENBQUMsV0FBVztZQUM1QixPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsYUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQztZQUNyRCxXQUFXLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07Z0JBQ2pDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3ZFLDJCQUEyQixFQUFFLHdCQUFVLENBQUMsMkJBQTJCO2FBQ3BFO1NBQ0osQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUNGO0FBaEJELG9DQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjZGsgPSByZXF1aXJlKCdhd3MtY2RrLWxpYicpO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgYXdzRXhwb3J0cyBmcm9tIFwiLi4vLi4vc3JjL2F3cy1leHBvcnRzLmpzXCI7XG5pbXBvcnQgeyBGdW5jdGlvbiwgQ29kZSwgUnVudGltZSB9IGZyb20gJ2F3cy1jZGstbGliL2xhbWJkYSc7XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0U3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBuZXdVc2VyQWRkZWRGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbih0aGlzLCAnTmV3VXNlckFkZGVkRnVuY3Rpb24nLCB7XG4gICAgICAgIHJ1bnRpbWU6IFJ1bnRpbWUuTk9ERUpTXzE2X1gsXG4gICAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgICAgICAgY29kZTogQ29kZS5mcm9tQXNzZXQoJ3Jlc291cmNlcy9sYW1iZGEvbmV3VXNlckFkZGVkJyksXG4gICAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgICAgICByZWdpb246IGNkay5TdGFjay5vZih0aGlzKS5yZWdpb24sXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHlab25lczogSlNPTi5zdHJpbmdpZnkoY2RrLlN0YWNrLm9mKHRoaXMpLmF2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICAgICAgICAgIGF3c19hcHBzeW5jX2dyYXBocWxFbmRwb2ludDogYXdzRXhwb3J0cy5hd3NfYXBwc3luY19ncmFwaHFsRW5kcG9pbnQsXG4gICAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gIH1cbn0iXX0=