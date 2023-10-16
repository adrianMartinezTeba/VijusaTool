const express = require("express")
const UserController = require("../controllers/UserController")
const router = express.Router()


router.post("/create",UserController.createUser)
router.get("/get",UserController.getUsers)
router.get("/get/:_id",UserController.getUserById)
router.put("/update/:_id",UserController.updateUser)
router.delete("/delete/:_id",UserController.deleteUser)


module.exports = router
