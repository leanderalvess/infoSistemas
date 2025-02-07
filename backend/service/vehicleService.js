const { v4: uuidv4 } = require('uuid');
const { AWS } = require('../utils/setupAws');
require('dotenv').config();

const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

const createVehicle = async (vehicle) => {
  const id = uuidv4();
  const params = {
    TableName: TABLE_NAME,
    Item: {
      ...vehicle,
      id
    }
  };

  await docClient.put(params).promise();
  return { id, ...vehicle };
};

const getAllVehicles = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const result = await docClient.scan(params).promise();
  return result.Items;
};

const getVehicleById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  const result = await docClient.get(params).promise();
  return result.Item;
};

const updateVehicle = async (id, updates) => {
  const updateExpressions = [];
  const expressionValues = {};

  let entries = updates;
  if(entries?.id) {
    const { id, ...rest} = entries;
    entries = rest;
  }

  for (const [key, value] of Object.entries(entries)) {
    updateExpressions.push(`${key} = :${key}`);
    expressionValues[`:${key}`] = value;
  }

  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: `set ${updateExpressions.join(', ')}`,
    ExpressionAttributeValues: expressionValues,
    ReturnValues: 'UPDATED_NEW',
  };

  return await docClient.update(params).promise();
};

const deleteVehicle = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  await docClient.delete(params).promise();
  return true;
};

module.exports = {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
