const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //email field validation
  if (!Validator.isEmail(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field cannot be empty";
  }

  //password field validation
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field cannot be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
