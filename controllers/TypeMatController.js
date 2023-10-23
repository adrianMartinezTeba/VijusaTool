const TypeMat = require("../models/TypeMat");

const TypeMatController = {
    async createTypeMat(req, res, next) {
        try {
        
            const newTypeMat = await TypeMat.create(req.body);
            res.status(201).json({ message: "Forma creada con éxito",typeMat: newTypeMat });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getTypeMats(req, res) {
        try {
            const typeMats = await TypeMat.find();
            res.send(typeMats);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getTypeMatById(req, res) {
        try {
            const typeMat = await TypeMat.findById(req.params._id);
            res.send(typeMat);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateTypeMat(req, res) {
        try {
            const updatedTypeMat = await TypeMat.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Forma actualizada con éxito", typeMat: updatedTypeMat });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteTypeMat(req, res) {
        try {
            await TypeMat.findByIdAndDelete(req.params._id);
            res.send({ message: "Forma eliminada con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = TypeMatController;
