'use strict';

exports.xztest = (request, response) => {
  // response.status(200).send(JSON.stringify(
  //   {
  //     message: 'Go Serverless v1.0! Your function executed GCP successfully!'
  //   },
  // ));
  response.status(200).send('server less on GCP');
};
