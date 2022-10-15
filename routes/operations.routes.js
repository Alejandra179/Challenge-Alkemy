const router = require("express").Router();
const auth = require("../middlewares/auth");
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
  getOperationsByTypeAndCategory,
} = require("../controllers/operation.controllers");
const { check } = require("express-validator");
const validationFields = require("../helpers/validationFields");

router.get("/", auth, getOperations);
router.post(
  "/addOperation",
  [
   
    [
      check("type_operation", "type of operation is required")
        .not()
        .isEmpty()
        .isNumeric(),
      check("concept", "concept is required")
        .not()
        .isEmpty()
        .isString()
        .withMessage("the concept shout by string"),
      check("amount", "amount is required")
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage("the amount shout by numeric"),
      check("date", "date is required")
        .not()
        .isEmpty()
        .isDate()
        .withMessage("invalid date"),
      validationFields,
    ],
  ],
  addOperation
);
router.get("/type-operation/:id_type", getOperationsBytype );
router.get("/categories/:category", getOperationsByCategory);
router.get("/last/:idUser", getLastOperations);
router.get("/:category/:type_operation", getOperationsByTypeAndCategory);
router.get("/getBalance", getBalance);
router.put(
  "/:id_operation",
  [
    auth,
    [
      check("concept", "concept is required").isString(),
      check("amount", "amount is required").isNumeric(),
      validationFields,
    ],
  ],
  updateOperation
);
router.delete("/:id_operation", auth, deleteOperation);
router.post(
  "/categories/addCategory",
  [
    auth,
    [
      check("description", "description is required")
        .not()
        .isEmpty()
        .isString(),
      validationFields,
    ],
  ],
  addCategory
);

module.exports = router;
