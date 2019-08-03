'use strict';

const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  // build SES params
  const emailParams = {
    Source: formData.ses_address,
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: [formData.send_to],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.reply_to}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: formData.subject,
      },
    },
  };

  // send email
  SES.sendEmail(emailParams, callback)
}

module.exports.portfolioMailer = (event, context, callback) => {

  const formData = JSON.parse(event.body);

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: err ? err.message : data
      }),
    };
    callback(null, response);
  });
};
