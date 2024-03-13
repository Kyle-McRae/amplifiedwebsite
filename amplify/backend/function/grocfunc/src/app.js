/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const { DynamoDBClient, PutItemCommand, ScanCommand, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

const dynamo = new DynamoDBClient();



const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/groc', async function(req, res) {
  var params = {
    TableName: "Grocery"
  }
  const command = new ScanCommand(params);
  const response = await dynamo.send(command);
  res.json(response.Items);
});

app.get('/groc/:grocName', async function(req, res) {
var grocName = req.params.grocName;
var params = {
  Key: {
    "Name": {
      S: grocName
     },
   },
   TableName: "Grocery"
  };
  const command = new DeleteItemCommand(params);
  const response = await dynamo.send(command);
  res.json({response: response, url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/groc', async function(req, res) {
var newGrocData = req.body.newGrocData;
var params = {
  Item: {
    "Name": {
      S: newGrocData.name
     }, 
    "Quantity": {
      N: newGrocData.quantity
     },
   },
   TableName: "Grocery"
  };
  const command = new PutItemCommand(params);
  const response = await dynamo.send(command);
  res.json({response: response, url: req.url});
});

app.post('/groc/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/groc', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/groc/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/groc', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/groc/:grocName', async function(req, res) {
  var grocName = req.params.grocName;
  var params = {
    Key: {
      "Name": {
        S: grocName
       },
     },
     TableName: "Grocery"
    };
    const command = new DeleteItemCommand(params);
    const response = await dynamo.send(command);
    res.json({response: response, url: req.url});
  });

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
