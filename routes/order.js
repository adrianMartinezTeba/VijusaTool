const express = require("express")
const OrderController = require("../controllers/OrderController")
const router = express.Router()


router.post("/create",OrderController.createOrder)
router.get("/get",OrderController.getOrders)
router.get("/get/:_id",OrderController.getOrderById)
router.put("/update/:_id",OrderController.updateOrder)
router.delete("/delete/:_id",OrderController.deleteOrder)


module.exports = router
