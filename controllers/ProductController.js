const Product = require("../models/Product");
const Variable = require("../models/Variable");
const ProductController = {
    async createProduct(req, res, next) {
        try {
            const { name, description, variables, notes } = req.body;

            // Calcular el precio en función de las variables
            let price = 0;
            for (const variableData of variables) {
                const variable = await Variable.findById(variableData.variable);
                if (!variable) {
                    return res.status(400).json({ message: "Variable no encontrada" });
                }

                switch (variable.operation) {
                    case "sum":
                        price += variable.value;
                        break;
                    case "subtract":
                        price -= variable.value;
                        break;
                    case "multiply":
                        price *= variable.value;
                        break;
                    case "divide":
                        if (variable.value !== 0) {
                            price /= variable.value;
                        }
                        break;
                    case "percentage":
                        price *= 1 + variable.value / 100; // Aplicar porcentaje
                        break;
                    default:
                        break;
                }
            }

            const product = await Product.create({ name, description, variables, price, notes });
            res.status(201).json({ message: "Producto creado con éxito", product });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getProducts(req, res) {
        try {
            const products = await Product.find();
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
    }
};

module.exports = ProductController;
