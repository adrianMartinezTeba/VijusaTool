const Material = require("../models/Material");

const MaterialController = {
    async createMaterial(req, res, next) {
        try {
         
            const material = await Material.create(req.body);
            res.status(201).json({ message: "Material creado con éxito", material });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getMaterials(req, res) {
        try {
            const materials = await Material.find();
            res.send(materials);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getMaterialById(req, res) {
        try {
            const material = await Material.findById(req.params._id);
            res.send(material);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateMaterial(req, res) {
        try {
            const updatedMaterial = await Material.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Material actualizado con éxito", material: updatedMaterial });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteMaterial(req, res) {
        try {
            await Material.findByIdAndDelete(req.params._id);
            res.send({ message: "Material eliminado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = MaterialController;
