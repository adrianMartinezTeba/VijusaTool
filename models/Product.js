const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProductSchema = new mongoose.Schema(
    {   
        number: { type: Number, required: true },
        modelName: { type: String, required: true },
        contactId: { type: ObjectId, ref: "Contact", required: true }, // Que lo coge del Id del Customer que viene en la orden
        rawMaterials: [
            {
            // Para la sección "Materias primas"
            rawMaterialId: { type: ObjectId, ref: "RawMaterial", required: true },
            tamañoDelCorte:  { type: Number, required: true },
            precioDelCorte:  { type: Number, required: true },//precio del corte entorno al al valor del precio por metro del rawMaterial si vale 1 metro de ese material 2,89 € y quieren cortar 120mm  que aqui vaya esa equivalencia
            cantidadDeCortes: { type: Number, required: true }, // numero de cortes a realizar en esa materia prima
            precioTotalSobreEsaMateriaPrima: { type: Number, required: true },//suma de todos los cortes
            },
        ],
        operationsToFollow: [{
            // Para la sección "Operaciones a seguir"
            operationId: { type: ObjectId, ref: "OperationToFollow" }, // Referencia al modelo OperationToFollow
            notes: { type: String }, // Notas personalizadas
            expectedTime: { type: String }, // Tiempo esperado para la operación
            priceOperation: { type: Number, required: true },//el resultado de el tiempo esperado * el valor del precio por hora trabajado ajustando que si ha durado la operacion 10 segundos y cobran 45€ la hora que salga lo que seria aqui por ejemplo y el precio de la hora trabajada viene en operationId 
        }],
        ruteToFollow: {
            // Para la sección "Rutas a seguir"
           type: ObjectId, ref: "RuteToFollow"// Referencia al modelo RuteToFollow
        },
        totalPrice: { type: Number, required: true }, // Precio del producto
        notes: { type: String }, // Notas del producto
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
