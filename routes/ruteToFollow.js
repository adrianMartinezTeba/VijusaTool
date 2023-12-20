const express = require("express")
const RuteToFollowController = require("../controllers/RuteToFollowController")
const router = express.Router()


router.post("/createRTF",RuteToFollowController.createRuteToFollow)
router.get("/getRTFs",RuteToFollowController.getRutesToFollow)
router.get("/getRTF/:_id",RuteToFollowController.getRuteToFollowById)
router.put("/updateRTF/:_id",RuteToFollowController.updateRuteToFollow)
router.delete("/deleteRTF/:_id",RuteToFollowController.deleteRuteToFollow)


module.exports = router
