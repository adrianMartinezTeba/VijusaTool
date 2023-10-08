const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const VariableSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre del producto
        description: { type: String},
        value: { type: Number, required: true }, // Valor de la variable
    },
    { timestamps: true }
);

const Variable = mongoose.model("Variable", VariableSchema);

module.exports = Variable;
