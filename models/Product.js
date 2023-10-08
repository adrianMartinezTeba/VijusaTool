const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre del producto
        category: { type: String, required: true },
        description: { type: String},
        // image: { type: String, required: true },
        variables: [{ type: ObjectId, ref: "Variable", required: true }], // Imagen del producto
        price: { type: Number, required: true }, // Precio del producto
        notes: { type: String }, // Notas del producto
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
