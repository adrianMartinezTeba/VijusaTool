const mongoose = require("mongoose");

const OperationToFollowSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre de la operación
        codeOperation: { type: Number },
        notes: { type: String  },
        priceHourEur: { type: Number, required: true },
    },
    { timestamps: true }
);

const OperationToFollow = mongoose.model("OperationToFollow", OperationToFollowSchema);

module.exports =OperationToFollow;
