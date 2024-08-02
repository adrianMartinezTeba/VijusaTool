const RuteToFollow = require("../models/RuteToFollow");
const Product = require("../models/Product");
const RuteToFollowController = {
    async createRuteToFollow(req, res, next) {
        try {
            console.log(req.body);
            const ruteToFollow = await RuteToFollow.create(req.body);
            res.status(201).json({
                message: "Ruta creada con éxito",
                ruteToFollowId: ruteToFollow._id // Devuelve el ID de la ruta creada
            });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },
    async setProductIdOnRTF(req, res) {

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
            const ruteToFollow = await RuteToFollow.findById(req.params._id)
            .populate('productId')
            .populate('rawMaterials.rawMaterialId'
            )
            .populate({path:'rawMaterials',populate:{path:'operationsToFollow.operationId',model:'OperationToFollow'}});
            res.send(ruteToFollow);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateRuteToFollow(req, res) {
        try {
            console.log(req.body);
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
