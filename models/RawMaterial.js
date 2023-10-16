const mongoose = require("mongoose");

const RawMaterialSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre de la materia prima
        material: { type: String,enum:["Latón", "Acero", "Aluminio"], required: true },
        diámetro: { type: String, required: true },
        forma: { type: String ,enum:['Tubo','Pletina'], required: true },
        tamañoDelCorte: { type: Number, required: true },
        operationToFixPrice: { type: String,enum:['sum','subtract','multiply','divide','percent'], required: true },
        value: { type: Number, required: true },
    },
    { timestamps: true }
);

const RawMaterial = mongoose.model("RawMaterial", RawMaterialSchema);

module.exports = RawMaterial;
