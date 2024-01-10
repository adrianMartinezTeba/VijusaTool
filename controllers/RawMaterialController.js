const RawMaterial = require("../models/RawMaterial");
const RawMaterialController = {
    async createRawMaterial(req, res, next) {
        try {
            const rawMaterial = await RawMaterial.create(req.body);
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
    },
    async search(req, res) {
        console.log(req.query);
        const { material, shape, externalDiameter, internalDiameter } = req.query;
        try {
            let query = {};
            // Agregar criterios al objeto de consulta según lo que se proporciona en la solicitud
            if (material) {
                query.material = { $regex: new RegExp(material, 'i') };
            }
            if (shape) {
                query.shape = { $regex: new RegExp(shape, 'i') };
            }
            if (externalDiameter) {
                query.externalDiameter = { $regex: new RegExp(externalDiameter, 'i') };
            }
            if (internalDiameter) {
                query.internalDiameter = { $regex: new RegExp(internalDiameter, 'i') };
            }
            const rawMaterials = await RawMaterial.find(query);
            res.send(rawMaterials);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}
module.exports = RawMaterialController;