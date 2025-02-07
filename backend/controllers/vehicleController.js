const vehicleService = require('../service/vehicleService');

const createVehicle = async (req, res) => {
    try {
        await vehicleService.createVehicle(req.body);
        res.status(201).json({ message: 'Veículo criado com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar veículo', details: err });
    }
};

const getVehicles = async (req, res) => {
    try {
        const data = await vehicleService.getAllVehicles();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar veículos', details: err });
    }
};

const updateVehicle = async (req, res) => {
    try {
        await vehicleService.updateVehicle(req.params.id, req.body);
        res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar veículo', details: err });
    }
};

const deleteVehicle = async (req, res) => {
    try {
        await vehicleService.deleteVehicle(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar veículo', details: err });
    }
};

module.exports = {
    createVehicle,
    getVehicles,
    updateVehicle,
    deleteVehicle,
};
