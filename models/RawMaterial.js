const mongoose = require("mongoose");
const RawMaterialSchema = new mongoose.Schema(
    {
        material: { type: String, required: true },
        shape: { type: String, required: true },
        externalDiameter: { type: String },//en mm+
        internalDiameter: { type: String },//en mm  
        priceKg: { type: Number, required: true },
        wheightMeter: { type: Number, required: true },
        priceMeter: { type: Number, required: true },
        // stock: { type: String }
    },
    { timestamps: true }
);
const RawMaterial = mongoose.model("RawMaterial", RawMaterialSchema);
module.exports = RawMaterial;
