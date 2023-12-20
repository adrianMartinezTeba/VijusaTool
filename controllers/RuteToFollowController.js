const RuteToFollow = require("../models/RuteToFollow");

const RuteToFollowController = {
    async createRuteToFollow(req, res, next) {
        try {
            const ruteToFollow = await RuteToFollow.create(req.body);
            res.status(201).json({ message: "Ruta creada con éxito", ruteToFollow });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getRutesToFollow(req, res) {
        try {
            const rutesToFollow = await RuteToFollow.find().populate("contactId").populate("productId");
            res.send(rutesToFollow);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getRuteToFollowById(req, res) {
        try {
            const ruteToFollow = await RuteToFollow.findById(req.params._id);
            res.send(ruteToFollow);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateRuteToFollow(req, res) {
        try {
            const updatedRuteToFollow = await RuteToFollow.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Ruta actualizada con éxito", ruteToFollow: updatedRuteToFollow });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteRuteToFollow(req, res) {
        try {
            await RuteToFollow.findByIdAndDelete(req.params._id);
            res.send({ message: "Ruta eliminada con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = RuteToFollowController;
