const router = require("express").Router();
const {
  getOperations,
  addOperation,
  getOperationsBytype,
  updateOperation,
  deleteOperation,
  getOperationsByCategory,
  getLastOperations,
  getBalance,
  addCategory,
} = require("../controllers/operation.controllers");


router.get("/", getOperations);
router.post("/addOperation", addOperation);
router.get("/:type_operation", getOperationsBytype);
router.put("/:id_operation", updateOperation);
router.delete("/:id_operation", deleteOperation);
router.get("/categories/:category/:id_user", getOperationsByCategory);
router.get("/last/",getLastOperations)
router.get("/:category/:type_operation/:id_user")
router.get("/getBalance",getBalance)
router.post("/categories/addCategory",addCategory)

module.exports = router;
