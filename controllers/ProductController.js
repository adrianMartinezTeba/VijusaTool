const Product = require("../models/Product");
const Contact = require("../models/Contact");
const RuteToFollow = require("../models/RuteToFollow");
const OperationToFollow = require("../models/OperationToFollow");
const ProductController = {
    async createProduct(req, res, next) {
        try {
            // Crea el producto
            const product = await Product.create({
                ...req.body,
                number: req.number
            });
    
            // Actualiza el contacto asociado con el productId
            const contactId = req.body.contactId;
            console.log(req.body.operationToFollow);
    
            await Contact.findByIdAndUpdate(
                contactId,
                { $push: { productsIds: product._id } },
                { new: true }
            );
    
            // Verifica si se ha proporcionado un ID de ruta
            if (req.body.ruteToFollow) {
                // Actualiza la ruta con el ID del producto
                await RuteToFollow.findByIdAndUpdate(
                    req.body.ruteToFollow,
                    { productId: product._id },
                    { new: true }
                );
            }
    
            res.status(201).json({ message: "Producto creado con éxito", product });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
    ,

    async getProducts(req, res) {
        try {
            const products = await Product.find().populate('contactId').populate('rawMaterials.rawMaterialId').populate('operationsToFollow.operationId');
            res.send(products);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getProductsWithOutRTF(req, res) {
        try {
            const products = await Product.find({ ruteToFollow: { $exists: false } })
                .populate('contactId')
                .populate('rawMaterials.rawMaterialId')
                .populate('operationsToFollow.operationId');
            res.send(products);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getProductById(req, res) {
        try {
            const product = await Product.findById(req.params._id)
                .populate('contactId')
                .populate({
                    path: 'rawMaterials.rawMaterialId',
                    model: 'RawMaterial'
                })
                .populate({
                    path: 'operationsToFollow.operationId',
                    model: 'OperationToFollow'
                })
                .populate({
                    path: 'ruteToFollow',
                    populate: {
                        path: 'rawMaterials.rawMaterialId',
                        model: 'RawMaterial'
                    }
                })
                .populate(
                    {
                        path: 'ruteToFollow',
                        populate: {
                            path: 'rawMaterials.operationsToFollow.operationId',
                            model: 'OperationToFollow'
                        }
                    }
                )                .populate(
                    {
                        path: 'ruteToFollow',
                        populate: {
                            path: 'rawMaterials.operationsToFollow._id',
                            model: 'OperationToFollow'
                        }
                    }
                )
                // .populate('ruteToFollow.rawMaterials.operationsToFollow.operationId');
            res.send( product );
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
,    
    
async updateProduct(req, res) {
    try {
        // Encuentra el producto por ID y actualiza los campos que se envían en el cuerpo de la solicitud
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true, runValidators: true } // `runValidators` asegura que las validaciones de Mongoose se ejecuten
        ) .populate('contactId')
        .populate({
            path: 'rawMaterials.rawMaterialId',
            model: 'RawMaterial'
        })
        .populate({
            path: 'operationsToFollow.operationId',
            model: 'OperationToFollow'
        })
        .populate({
            path: 'ruteToFollow',
            populate: {
                path: 'rawMaterials.rawMaterialId',
                model: 'RawMaterial'
            }
        })
        .populate(
            {
                path: 'ruteToFollow',
                populate: {
                    path: 'rawMaterials.operationsToFollow.operationId',
                    model: 'OperationToFollow'
                }
            }
        )                .populate(
            {
                path: 'ruteToFollow',
                populate: {
                    path: 'rawMaterials.operationsToFollow._id',
                    model: 'OperationToFollow'
                }
            }
        )
        // Verifica si se encontró el producto
        if (!updatedProduct) {
            return res.status(404).send({ message: "Producto no encontrado" });
        }

        // Población de los datos relacionados
        res.send({ message: "Producto actualizado con éxito", product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error al actualizar el producto", error });
    }
}
,

    async deleteProduct(req, res) {
        try {
            await Product.findByIdAndDelete(req.params._id);
            res.send({ message: "Producto eliminado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    } ,
     async getLastProduct(req, res) {
        try {
            const products = await Product.find();
            console.log(products);
            const lastProduct = await Product.findOne().sort({ number: -1 }).populate('contactId').populate('rawMaterials.rawMaterialId').populate('operationsToFollow.operationId');
            if (!lastProduct) {
                return res.status(404).json({ message: "No hay productos disponibles." });
            }

            res.send(lastProduct);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = ProductController;
