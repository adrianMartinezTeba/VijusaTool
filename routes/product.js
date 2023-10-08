const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()


router.post("/create",ProductController.createProduct)
router.get("/get",ProductController.getProducts)
router.get("/get/:_id",ProductController.getProductById)
router.put("/update/:_id",ProductController.updateProduct)
router.delete("/delete/:_id",ProductController.deleteProduct)

module.exports = router
