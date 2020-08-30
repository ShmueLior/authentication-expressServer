var express = require("express");
var router = express.Router();
const {
  checkEmail,
  checkPassword,
  doesPasswordExists,
  isValidated,
} = require("../controllers/checkRequest");
const {
  logUser,
  isRegisteredUser,
  registeredUser,
  sendUserById,
} = require("../controllers/userHendler");
const { isValidToken } = require("../controllers/authHendler");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post(
  "/signin",
  checkEmail,
  checkPassword,
  isValidated,
  isRegisteredUser,
  registeredUser
);

router.get(
  "/login",
  checkEmail,
  doesPasswordExists,
  isValidated,
  isRegisteredUser,
  logUser
);

router.get("/myName", isValidToken, sendUserById);

module.exports = router;
