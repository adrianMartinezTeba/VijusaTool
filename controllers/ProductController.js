const Product = require("../models/Product");

const ProductController = {
  async createProduct(req, res, next) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send({ message: "Producto creado con éxito", product });
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
      const product = await Product.findById(req.params.id);
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async updateProduct(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
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
      await Product.findByIdAndDelete(req.params.id);
      res.send({ message: "Producto eliminado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
};

module.exports = ProductController;
