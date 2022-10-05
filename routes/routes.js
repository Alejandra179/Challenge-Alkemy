const {
  getOperations,
  addOperation,
  getOperationsBytype,
  updateOperation,
  deleteOperation,
  getOperationsByCategory,
} = require("../controllers/operation.controllers");

const router = require("express").Router();

router.get("/", getOperations);
router.post("/addOperation", addOperation);
router.get("/:type_operation", getOperationsBytype);
router.put("/:id_operation", updateOperation);
router.delete("/:id_operation", deleteOperation);
router.get("/category/:category", getOperationsByCategory);
module.exports = router;
