const router = require("express").Router();
const auth = require("../middlewares/auth")
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


router.get("/",auth, getOperations);
router.post("/addOperation",auth, addOperation);
router.get("/:type_operation",auth, getOperationsBytype);
router.put("/:id_operation", auth,updateOperation);
router.delete("/:id_operation", auth,deleteOperation);
router.get("/categories/:category/:id_user",auth, getOperationsByCategory);
router.get("/last/",auth,getLastOperations)
router.get("/:category/:type_operation/:id_user")
router.get("/getBalance",getBalance)
router.post("/categories/addCategory",addCategory)

module.exports = router;
