const Shape = require("../models/Shape");

const ShapeController = {
    async createShape(req, res, next) {
        try {
        
            const newShape = await Shape.create(req.body);
            res.status(201).json({ message: "Forma creada con éxito",shape: newShape });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getShapes(req, res) {
        try {
            const shapes = await Shape.find();
            res.send(shapes);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getShapeById(req, res) {
        try {
            const shape = await Shape.findById(req.params._id);
            res.send(shape);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateShape(req, res) {
        try {
            const updatedShape = await Shape.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Forma actualizada con éxito", shape: updatedShape });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteShape(req, res) {
        try {
            await Shape.findByIdAndDelete(req.params._id);
            res.send({ message: "Forma eliminada con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = ShapeController;
