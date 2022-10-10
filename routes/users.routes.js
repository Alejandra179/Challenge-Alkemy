const { signUp, signIn } = require("../controllers/user.controllers");

const router = require("express").Router();
const { check } = require("express-validator");

router.post(
  "/signUp",
  [
    check("name", "name is required").not().isEmpty().isString(),
    check("email", "email is required").not().isEmpty().isEmail(),
    check("password", "password is required").not().isEmpty(),
  ],
  signUp
);

router.post(
  "/signIn",
  [
    check("email", "email is required").not().isEmpty().isEmail(),
    check("password", "password is required").not().isEmpty(),
  ],
  signIn
);
module.exports = router;
