const { check, validationResult } = require("express-validator");

// Request Checks

exports.checkEmail = check(
  "email",
  "Email value is invalid or missing"
).isEmail();
exports.checkPassword = check(
  "password",
  "Password length must be 6 characters or more"
).isLength({ min: 6 });
exports.doesPasswordExists = check("password", "Password is required").exists();

exports.isValidated = (req, res, next) => {
  const errors = validationResult(req);
  return !errors.isEmpty()
    ? res.status(400).json({ errors: errors.array() })
    : next();
};
