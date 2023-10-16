const Contact = require("../models/Contact");

const ContactController = {
    async createContact(req, res, next) {
        try {
            const { name, address, type, tlfn, ordersIds } = req.body;

            const contact = await Contact.create({ name, address, type, tlfn, ordersIds });
            res.status(201).json({ message: "Contacto creado con éxito", contact });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getContacts(req, res) {
        try {
            const contacts = await Contact.find();
            res.send(contacts);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getContactById(req, res) {
        try {
            const contact = await Contact.findById(req.params._id);
            res.send(contact);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async updateContact(req, res) {
        try {
            const updatedContact = await Contact.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Contacto actualizado con éxito", contact: updatedContact });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteContact(req, res) {
        try {
            await Contact.findByIdAndDelete(req.params._id);
            res.send({ message: "Contacto eliminado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = ContactController;
