const {
  getOperations,
  addOperation,
  getOperationsBytype,
  updateOperation,
  deleteOperation,
  getOperationsByCategory,
  getLastOperation,
} = require("../controllers/operation.controllers");

const router = require("express").Router();

router.get("/", getOperations);
router.post("/addOperation", addOperation);
router.get("/:type_operation", getOperationsBytype);
router.put("/:id_operation", updateOperation);
router.delete("/:id_operation", deleteOperation);
router.get("/categories/:category", getOperationsByCategory);
router.get("/last/",getLastOperation)
module.exports = router;
