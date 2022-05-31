// This AWS Lambda function forwards the given event data into an Amazon SQS queue, then starts an Amazon ECS task to
// process that event.

var fs = require('fs');
var async = require('async');
var aws = require('aws-sdk');
var ecs = new aws.ECS({apiVersion: '2014-11-13'});

exports.handler = function(event, context) {
    const eventString = JSON.stringify(event, null, '  ')
    console.log(`Received event: ${eventString}`);

    var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    async.waterfall([
        function (next) {
            console.log("Running task")
            // Starts an ECS task to work through the feeds.
            var params = {
                taskDefinition: config.task,
                count: 1,
                cluster: config.cluster
            };
            ecs.runTask(params, function (err, data) {
                if (data.failures){
                    context.fail("Error while starting task: " + JSON.stringify(data.failures))
                }
                if (err) { console.warn('error: ', "Error while starting task: " + err); }
                else { console.log(JSON.stringify(data))}
                next(err);
            });
        }
    ], function (err) {
        if (err) {
            context.fail('An error has occurred: ' + err);
        }
        else {
            context.succeed('Task started successfully');
        }
    });
    
};