const express = require("express")
const TypeMatController = require("../controllers/TypeMatController")
const router = express.Router()


router.post("/create",TypeMatController.createTypeMat)
router.get("/get",TypeMatController.getTypeMats)
router.get("/get/:_id",TypeMatController.getTypeMatById)
router.put("/update/:_id",TypeMatController.updateTypeMat)
router.delete("/delete/:_id",TypeMatController.deleteTypeMat)


module.exports = router
