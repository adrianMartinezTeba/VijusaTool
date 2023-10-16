const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ContactSchema = new mongoose.Schema(
    {   
        name: { type: String, required: true },
        adress: { type: String, required: true },
        type:
            {
                type: String,
                enum: ["Proveedor", "Cliente"],
                required: true,
            }
        ,
        tlfn: { type: Number, required: true },
        ordersIds: [{ type: ObjectId, ref: "Order"}],
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
