const { AWS } = require('../utils/setupAws');
const dynamodb = new AWS.DynamoDB();
require('dotenv').config();

const params = {
  TableName: process.env.TABLE_NAME,
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Erro ao criar tabela:', JSON.stringify(err, null, 2));
  } else {
    console.log('Tabela criada com sucesso:', JSON.stringify(data, null, 2));
  }
});