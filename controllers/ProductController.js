const Product = require("../models/Product");
const Contact = require("../models/Contact");
const ProductController = {
    async createProduct(req, res, next) {
        try {
            const product = await Product.create(
                {...req.body,
                number: req.number});
           // Actualizar el contacto asociado con el productId
           const contactId = req.body.contactId;
           await Contact.findByIdAndUpdate(
               contactId,
               { $push: { productsIds: product._id } },
               { new: true }
           );
            res.status(201).json({ message: "Producto creado con éxito", product });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getProducts(req, res) {
        try {
            const products = await Product.find().populate('customerId');
            res.send(products);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getProductById(req, res) {
        try {
            const product = await Product.findById(req.params._id);
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateProduct(req, res) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Producto actualizado con éxito", product: updatedProduct });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteProduct(req, res) {
        try {
            await Product.findByIdAndDelete(req.params._id);
            res.send({ message: "Producto eliminado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    } ,
     async getLastProduct(req, res) {
        try {
            const products = await Product.find();
            console.log(products);
            const lastProduct = await Product.findOne().sort({ number: -1 }).populate('contactId').populate('rawMaterials.rawMaterialId').populate('operationsToFollow.operationId');
            if (!lastProduct) {
                return res.status(404).json({ message: "No hay productos disponibles." });
            }

            res.send(lastProduct);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};

module.exports = ProductController;
