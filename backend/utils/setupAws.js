const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.DATABASE_URL
});

module.exports = {AWS};