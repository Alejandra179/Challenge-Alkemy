const { getOperationes, addOperation, getOperationBytype, updateOperation } = require("../controllers/operation.controllers")

const router = require("express").Router()

router.get("/",getOperationes)
router.post("/addOperation",addOperation)
router.get("/:type_operation",getOperationBytype)
router.put("/:id_operation",updateOperation)
module.exports = router;