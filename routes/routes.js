const { getOperaciones, addOperation, getOperationBytype } = require("../controllers/operation.controllers")

const router = require("express").Router()

router.get("/",getOperaciones)
router.post("/addOperation",addOperation)
router.get("/:type_operation",getOperationBytype)

module.exports = router;