const RawMaterial = require("../models/RawMaterial");

const RawMaterialController = {
    async createRawMaterial(req, res, next) {
        try {
            const { name, material, diámetro, forma, tamañoDelCorte, operationToFixPrice, value } = req.body;

            const rawMaterial = await RawMaterial.create({ name, material, diámetro, forma, tamañoDelCorte, operationToFixPrice, value });
            res.status(201).json({ message: "Materia prima creada con éxito", rawMaterial });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getRawMaterials(req, res) {
        try {
            const rawMaterials = await RawMaterial.find();
            res.send(rawMaterials);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getRawMaterialById(req, res) {
        try {
            const rawMaterial = await RawMaterial.findById(req.params._id);
            res.send(rawMaterial);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateRawMaterial(req, res) {
        try {
            const updatedRawMaterial = await RawMaterial.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Materia prima actualizada con éxito", rawMaterial: updatedRawMaterial });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteRawMaterial(req, res) {
        try {
            await RawMaterial.findByIdAndDelete(req.params._id);
            res.send({ message: "Materia prima eliminada con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = RawMaterialController;