const express = require("express")
const router = express.Router()


router.post("/create", authentication,upload.single('image'),PostController.create)

module.exports = router
