const chai = require('chai');
const expect = chai.expect;
const vehicleService = require('../service/vehicleService');
const { AWS } = require('../utils/setupAws');
require('dotenv').config();

const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

describe('Vehicles', () => {
    beforeEach(async () => {
        const scanResult = await docClient.scan({ TableName: TABLE_NAME }).promise();
        const deletePromises = scanResult.Items.map((item) =>
          docClient.delete({ TableName: TABLE_NAME, Key: { id: item.id } }).promise()
        );
        await Promise.all(deletePromises);
    });

    it('Should create a new vehicle', async () => {
        const vehicle = {
            placa: 'ABC-1234',
            chassi: '12345',
            renavam: '98765',
            modelo: 'Fusca',
            marca: 'VW',
            ano: 1998,
        };

        await vehicleService.createVehicle(vehicle);

        const vehicles = await vehicleService.getAllVehicles();
        expect(vehicles).to.have.lengthOf(1);
        expect(vehicles[0]).to.include(vehicle);
    });

    it('Should list all vehicles', async () => {
        await vehicleService.createVehicle({
          placa: 'DEF-5678',
          chassi: '67890',
          renavam: '65432',
          modelo: 'Civic',
          marca: 'Honda',
          ano: 2020,
        });

        const vehicles = await vehicleService.getAllVehicles();
        expect(vehicles).to.have.lengthOf(1);
        expect(vehicles[0]).to.have.property('placa', 'DEF-5678');
    });

    it('Should search a vehicle by Id', async () => {
        const createdVehicle = await vehicleService.createVehicle({
          placa: 'XYZ-9876',
          chassi: '54321',
          renavam: '12321',
          modelo: 'Gol',
          marca: 'VW',
          ano: 2015,
        });

        const vehicle = await vehicleService.getVehicleById(createdVehicle.id);
        expect(vehicle).to.have.property('placa', 'XYZ-9876');
    });

    it('Should update a vehicle', async () => {
        const createdVehicle = await vehicleService.createVehicle({
          placa: 'GHI-1122',
          chassi: '99999',
          renavam: '77777',
          modelo: 'Palio',
          marca: 'Fiat',
          ano: 2010,
        });

        await vehicleService.updateVehicle(createdVehicle.id, { modelo: 'Palio Updated' });
        const updatedVehicle = await vehicleService.getVehicleById(createdVehicle.id);

        expect(updatedVehicle.modelo).to.equal('Palio Updated');
    });

    it('Should delete a vehicle', async () => {
        const createdVehicle = await vehicleService.createVehicle({
          placa: 'LMN-3344',
          chassi: '11111',
          renavam: '22222',
          modelo: 'Corolla',
          marca: 'Toyota',
          ano: 2018,
        });

        const deleted = await vehicleService.deleteVehicle(createdVehicle.id);
        const vehicles = await vehicleService.getAllVehicles();
        expect(deleted).to.be.true;
        expect(vehicles).to.have.lengthOf(0);
    });
});
