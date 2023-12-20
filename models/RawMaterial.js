const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const RawMaterialSchema = new mongoose.Schema(
    {
        material: { type: String, required: true },
        shape: { type: String, required: true },
        externalDiameter: { type: String },//en mm+
        internalDiameter: { type: String },//en mm  
        priceKg: { type: Number, required: true },
        wheightMeter: { type: Number, required: true },
        priceMetro: { type: Number, required: true },
        stock: { type: String }
    },
    { timestamps: true }
);

const RawMaterial = mongoose.model("RawMaterial", RawMaterialSchema);

module.exports = RawMaterial;
