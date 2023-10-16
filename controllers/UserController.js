const User = require("../models/User");

const UserController = {
    async createUser(req, res, next) {
        try {
            const { username, email, password, role } = req.body;

            const user = await User.create({ username, email, password, role });
            res.status(201).json({ message: "Usuario creado con éxito", user });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params._id);
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Usuario actualizado con éxito", user: updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteUser(req, res) {
        try {
            await User.findByIdAndDelete(req.params._id);
            res.send({ message: "Usuario eliminado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = UserController;
