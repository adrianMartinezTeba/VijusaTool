const RuteToFollow = require("../models/RuteToFollow");
const Product = require("../models/Product");
const RuteToFollowController = {
    async createRuteToFollow(req, res, next) {
        try {
            // Desestructura el productId del cuerpo de la solicitud
            const { productId, ...ruteToFollowData } = req.body;
    
            // Verifica si productId está presente en el cuerpo de la solicitud
            if (!productId) {
                return res.status(400).json({ message: "ProductId is required to associate the RuteToFollow with a product." });
            }
    
            // Busca el producto correspondiente por su productId
            const product = await Product.findById(productId);
            
            // Verifica si el producto existe
            if (!product) {
                return res.status(404).json({ message: "Product not found." });
            }
    
            // Asocia la ruta a seguir con el producto
            const ruteToFollow = await RuteToFollow.create({ ...ruteToFollowData, productId });
    
            // Actualiza el campo ruteToFollow del producto con el ID de la nueva ruta a seguir
            product.ruteToFollow = ruteToFollow._id;
            await product.save();
    
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
