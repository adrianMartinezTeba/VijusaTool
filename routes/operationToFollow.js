const express = require("express")
const OperationToFollowController = require("../controllers/OperationToFollowController")
const router = express.Router()


router.post("/create",OperationToFollowController.createOperationToFollow)
router.get("/get",OperationToFollowController.getOperationsToFollow)
router.get("/get/:_id",OperationToFollowController.getOperationToFollowById)
router.get("/search/:code",OperationToFollowController.searchByCode)
router.get("/search/:shape",OperationToFollowController.searchByShape)
router.get("/search/:name",OperationToFollowController.searchByName)
router.put("/update/:_id",OperationToFollowController.updateOperationToFollow)
router.delete("/delete/:_id",OperationToFollowController.deleteOperationToFollow)


module.exports = router
