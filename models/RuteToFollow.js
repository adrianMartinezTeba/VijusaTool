const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const RuteToFollowSchema = new mongoose.Schema(
    { 
        productId: { type: ObjectId, ref: "Product", required: true },
        rawMaterials: [{
            contactId: { type: ObjectId, ref: "Contact", required: true },
            rawMaterialId: { type: ObjectId, ref: "RawMaterial", required: true },
            cantidadDeCortes: { type: Number, required: true },
            operationsToFollow: [{
                operationId: { type: ObjectId, ref: "OperationToFollow" }, 
                notes: { type: String },
            }],
            }],
        state: [
            {
                toDo: { type: Boolean, default: true },
                doing: { type: Boolean, default: false },
                done: { type: Boolean, default: false },
            }
        ]
    },
    { timestamps: true }
);

const RuteToFollow = mongoose.model("RuteToFollow", RuteToFollowSchema);

module.exports = RuteToFollow;
