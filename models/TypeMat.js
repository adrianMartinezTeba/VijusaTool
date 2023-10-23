const mongoose = require("mongoose");


const TypeMatSchema = new mongoose.Schema(
    {
        TypeMat:{ type: String, required: true },
    },
    { timestamps: true }
);

const TypeMat = mongoose.model("TypeMat", TypeMatSchema);

module.exports = TypeMat;
