const Contact = require("../models/Contact");
const Product = require("../models/Product");

const ContactController = {
    async createContact(req, res, next) {
        try {
            const contact = await Contact.create(req.body);
            res.status(201).send({ message: "Contacto creado con éxito", contact });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async getContacts(req, res) {
        try {
            const contacts = await Contact.find().populate("productsIds");
            res.send(contacts);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getContactById(req, res) {
        try {
            const contact = await Contact.findById(req.params._id).populate("productsIds");
            res.send(contact);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async getContactByName(req, res) {
        try {
            const contactName = req.params.name;
            if (!contactName) {
                return res.status(400).json({ error: 'El parámetro "name" es requerido para la búsqueda.' });
            }

            const contacts = await Contact.find({ name: { $regex: new RegExp(contactName, 'i') } }).populate("productsIds");

            res.json(contacts);
        } catch (error) {
            console.error('Error al buscar contactos por nombre:', error);
            res.status(500).json({ error: 'Error interno del servidor.' });
        }
    },

    async updateContact(req, res) {
        try {
            console.log(req.body);
            const updatedContact = await Contact.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            ).populate("productsIds"); // Asegúrate de que populate se llame correctamente

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
