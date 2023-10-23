const express = require("express")
const MaterialController = require("../controllers/MaterialController")
const router = express.Router()


router.post("/create",MaterialController.createMaterial)
router.get("/get",MaterialController.getMaterials)
router.get("/get/:_id",MaterialController.getMaterialById)
router.put("/update/:_id",MaterialController.updateMaterial)
router.delete("/delete/:_id",MaterialController.deleteMaterial)


module.exports = router
