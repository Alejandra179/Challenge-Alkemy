const { signUp, signIn } = require("../controllers/user.controllers");

const router = require("express").Router();
const { check } = require("express-validator");
const validationFields = require("../helpers/validationFields");


router.post(
  "/signUp",
  [
    check("name", "name is required").not().isEmpty().isString().withMessage("the name shout not by numeric"),
    check("email", "email is required").not().isEmpty().isEmail().withMessage("email is invalid"),
    check("password", "password is required").not().isEmpty(),
    validationFields
  ],
  signUp
);

router.post(
  "/signIn",
  [
    check("email", "email is required").not().isEmpty().isEmail().withMessage("email is invalid"),
    check("password", "password is required").not().isEmpty(),
  ],
  signIn
);
module.exports = router;
