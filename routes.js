const { getOperaciones } = require("./controller")

const router = require("express").Router()

router.get("/",getOperaciones)

module.exports = router;