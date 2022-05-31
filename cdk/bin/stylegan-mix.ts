#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
const app = new cdk.App();

import { SupportStack } from '../lib/support-stack';

new SupportStack(app, "MixmatchSupportStack", {
});
