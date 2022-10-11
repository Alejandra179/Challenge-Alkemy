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
} = require("../controllers/operation.controllers");
const { check } = require("express-validator");
const validationFields = require("../helpers/validationFields");

router.get("/", auth, getOperations);
router.post(
  "/addOperation",
  [
    auth,
    [
      check("type_operation", "type of operation is required")
        .not()
        .isEmpty()
        .isInt(),
      check("concept", "concept is required").not().isEmpty().isString(),
      check("amount", "amount is required").not().isEmpty().isNumeric(),
      check("date", "date is required").not().isEmpty().isDate(),
      validationFields
    ],
  ],
  addOperation
);
router.get(
  "/:type_operation",
  [
    auth,
    [
      check("type_operation", "type of operation is required")
        .not()
        .isEmpty()
        .isInt(),
        validationFields
    ],
  ],
  getOperationsBytype
);
router.put(
  "/:id_operation",
  [
    auth,
    [
      check("concept", "concept is required").not().isEmpty().isString(),
      check("amount", "amount is required").not().isEmpty().isNumeric(),
      check("date", "date is required").not().isEmpty().isDate(),
      validationFields
    ],

  ],
  updateOperation
);
router.delete("/:id_operation", auth, deleteOperation);
router.get("/categories/:category", auth, getOperationsByCategory);
router.get("/last/", auth, getLastOperations);
router.get("/:category/:type_operation");
router.get("/getBalance", getBalance);
router.post(
  "/categories/addCategory",
  [
    auth,
    [
      check("description", "description is required")
        .not()
        .isEmpty()
        .isString(),
        validationFields
    ],
  ],
  addCategory
);

module.exports = router;
