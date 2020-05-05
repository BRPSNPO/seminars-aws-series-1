const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handler = (event, context, callback) => {
    console.log("Processing...");
    const params = {
        Item: {
            date: Date.now(),
            message: event.key1
        },
        TableName: "doe"
    };
    console.log("esse e o evento: " + event.key1)
    console.log(params)
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Hello from new Lambda!'),
  };
    
    docClient.put(params, function(err, data) {
        if(err){
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
};
