const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre del producto
        category: { type: String, required: true },
        description: { type: String},
        sections:[
            {
                name: { type: String, required: true, default: "Materias primas:" }, // Nombre del Section
                RawMaterialsIds: [{ type: ObjectId, ref: "RawMaterial", required: true }],
            },
            {
                name: { type: String, required: true, default: "Operaciones a seguir:" }, // Nombre del Section
                operacionesASeguirIds: [{ type: ObjectId, ref: "OperationToFollow", required: true }],
            }
        ],
        // image: { type: String, required: true },
       
        price: { type: Number, required: true }, // Precio del producto
        customerId: { type: ObjectId, ref: "Customer", required: true }, // Que lo coge del Id del Customer qque viene en order
        notes: { type: String }, // Notas del producto
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
