const OperationToFollow = require("../models/OperationToFollow");

const OperationToFollowController = {
    async createOperationToFollow(req, res, next) {
        try {
            const { name, time, codeOperation, operationToFixPrice, value } = req.body;

            const operationToFollow = await OperationToFollow.create({ name, time, codeOperation, operationToFixPrice, value });
            res.status(201).json({ message: "Operación a seguir creada con éxito", operationToFollow });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getOperationsToFollow(req, res) {
        try {
            const operationsToFollow = await OperationToFollow.find();
            res.send(operationsToFollow);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getOperationToFollowById(req, res) {
        try {
            const operationToFollow = await OperationToFollow.findById(req.params._id);
            res.send(operationToFollow);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateOperationToFollow(req, res) {
        try {
            const updatedOperationToFollow = await OperationToFollow.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Operación a seguir actualizada con éxito", operationToFollow: updatedOperationToFollow });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteOperationToFollow(req, res) {
        try {
            await OperationToFollow.findByIdAndDelete(req.params._id);
            res.send({ message: "Operación a seguir eliminada con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = OperationToFollowController;
