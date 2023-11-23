const mongoose = require("mongoose");


const ShapeSchema = new mongoose.Schema(
    {
        nameShape:{ type: String, required: true },
    },
    { timestamps: true }
);
//barra,pletina,etc
const Shape = mongoose.model("Shape", ShapeSchema);

module.exports = Shape;
