const Product = require('../models/Product');

const numProducts = async (req, res, next) => {
    try {
        const lastProduct = await Product.findOne().sort({ number: -1 });
        console.log(lastProduct);
        req.number = lastProduct ? lastProduct.number + 1 : 1;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

module.exports = numProducts;