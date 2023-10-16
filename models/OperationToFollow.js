const mongoose = require("mongoose");

const OperationToFollowSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, enum:['Cortar','Fresar','Soldar'] }, // Nombre de la operación
        time: { type: Number },
        codeOperation: { type: Number },
        operationToFixPrice: { type: String,enum:['sum','subtract','multiply','divide','percent'], required: true },
        value: { type: Number, required: true },
    },
    { timestamps: true }
);

const OperationToFollow = mongoose.model("OperationToFollow", OperationToFollowSchema);

module.exports =OperationToFollow;
