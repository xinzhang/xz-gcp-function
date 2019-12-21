'use strict';

exports.xztest = (request, response) => {
  response.status(200).send(JSON.stringify(
    {
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    },
  ));
};

exports.event = (event, callback) => {
  callback();
};
