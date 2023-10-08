const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const VariableSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre del producto
        description: { type: String},
        value: { type: Number}, // Valor de la variable
        modifyPrice: { type: Boolean, default: false }, // Modificar el valor de la variable
        category: { type: String, required: true },
        operation: {
            type: String,
            enum: ["sum", "subtract", "multiply", "divide", "percentage"],
            required: true,
          },
    },
    { timestamps: true }
);

const Variable = mongoose.model("Variable", VariableSchema);

module.exports = Variable;
