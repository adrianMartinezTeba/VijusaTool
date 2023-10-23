const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const MaterialSchema = new mongoose.Schema(
    {
    name:{ type: String, required: true },
    },
    { timestamps: true }
);

const Material = mongoose.model("Material", MaterialSchema);

module.exports = Material;
