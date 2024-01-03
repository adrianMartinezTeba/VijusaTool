const express = require("express")
const ContactController = require("../controllers/ContactController")
const router = express.Router()


router.post("/create",ContactController.createContact)
router.get("/get",ContactController.getContacts)
router.get("/get/:_id",ContactController.getContactById)
router.get("/getByName/:name",ContactController.getContactByName)
router.put("/update/:_id",ContactController.updateContact)
router.delete("/delete/:_id",ContactController.deleteContact)


module.exports = router
