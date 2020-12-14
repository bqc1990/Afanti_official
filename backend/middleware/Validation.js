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

const validateOrder = (data) => {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().min(5).required(),
    address: joi.string().required(),
    country: joi.string().required(),
    state: joi.string().required(),
    zip: joi.number().required(),
  });
  return schema.validate({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    address: data.address,
    country: data.country,
    state: data.state,
    zip: data.zip,
  });
};

module.exports = { validateSignUp, validateSignIn, validateOrder };
