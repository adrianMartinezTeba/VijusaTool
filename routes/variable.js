const express = require("express")
const VariableController = require("../controllers/VariableController")
const router = express.Router()


router.post("/create",VariableController.createVariable)
router.get("/get",VariableController.getVariables)
router.get("/get/:_id",VariableController.getVariableById)
router.put("/update/:_id",VariableController.updateVariable)
router.delete("/delete/:_id",VariableController.deleteVariable)

module.exports = router
