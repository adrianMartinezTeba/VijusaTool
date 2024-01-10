const express = require("express")
const ProductController = require("../controllers/ProductController")
const numProducts = require("../middlewares/NumProducts")
const router = express.Router()


router.post("/create",numProducts,ProductController.createProduct)
router.get("/get",ProductController.getProducts)
router.get("/get/:_id",ProductController.getProductById)
router.get("/getLast",ProductController.getLastProduct)
router.put("/update/:_id",ProductController.updateProduct)
router.delete("/delete/:_id",ProductController.deleteProduct)

module.exports = router
