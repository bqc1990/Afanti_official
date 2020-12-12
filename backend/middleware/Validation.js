const joi = require("joi");

const validateSignUp = (data) => {
  const schema = joi.object({
    email: joi.string().min(5).required(),
    password: joi.string().min(6).required(),
    repeat_password: joi.string().required().valid(joi.ref("password")),
  });
  return schema.validate({
    email: data.email,
    password: data.password,
    repeat_password: data.repeat_password,
  });
};
const validateSignIn = (data) => {
  const schema = joi.object({
    email: joi.string().min(5).required(),
    password: joi.string().min(6).required(),
  });
  return schema.validate({
    email: data.email,
    password: data.password,
  });
};

module.exports = { validateSignUp, validateSignIn };
