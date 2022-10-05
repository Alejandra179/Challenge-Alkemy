const { signUp, signIn } = require("../controllers/user.controllers")

const router = require("express").Router()

router.post("/signUp",signUp)

router.get("/signIn",signIn)
module.exports = router;