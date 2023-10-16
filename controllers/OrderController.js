const Order = require("../models/Order");

const OrderController = {
    async createOrder(req, res, next) {
        try {
            const { products, description, customerId, customerName, price } = req.body;

            const order = await Order.create({ products, description, customerId, customerName, price });
            res.status(201).json({ message: "Orden creada con éxito", order });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getOrders(req, res) {
        try {
            const orders = await Order.find();
            res.send(orders);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getOrderById(req, res) {
        try {
            const order = await Order.findById(req.params._id);
            res.send(order);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateOrder(req, res) {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Orden actualizada con éxito", order: updatedOrder });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteOrder(req, res) {
        try {
            await Order.findByIdAndDelete(req.params._id);
            res.send({ message: "Orden eliminada con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = OrderController;
