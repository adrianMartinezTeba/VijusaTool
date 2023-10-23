const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const RawMaterialSchema = new mongoose.Schema(
    {
        material: { type: ObjectId, ref: "Material", required: true },
        typeMat: { type: ObjectId, ref: "TypeMat", required: true },
        externalDiameter: { type: String},//en mm+
        internalDiameter: { type: String },//en mm  
        priceKg: { type: Number, required: true },
        wheightMeter: { type: Number, required: true },
        priceMetro: { type: Number, required: true },
    },
    { timestamps: true }
);

const RawMaterial = mongoose.model("RawMaterial", RawMaterialSchema);

module.exports = RawMaterial;
