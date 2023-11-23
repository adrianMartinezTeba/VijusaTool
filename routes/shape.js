const express = require("express")
const ShapeController = require("../controllers/ShapeController")
const router = express.Router()


router.post("/create",ShapeController.createShape)
router.get("/get",ShapeController.getShapes)
router.get("/get/:_id",ShapeController.getShapeById)
router.put("/update/:_id",ShapeController.updateShape)
router.delete("/delete/:_id",ShapeController.deleteShape)


module.exports = router
