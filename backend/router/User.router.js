const router = require("express").Router();
const User = require("../model/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validateSignUp, validateSignIn } = require("../middleware/Validation");

router.post("/sign-up", async (req, res) => {
  try {
    //validate input from customer
    const { error } = validateSignUp(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    //check if the email already exists
    const customer_found = await User.findOne({ email: req.body.email });
    if (customer_found)
      return res.status(404).json({ msg: `${req.body.email} already exists.` });

    //bcrypt the password
    const salt = await bcrypt.genSalt();
    const password_hash = await bcrypt.hash(req.body.password, salt);

    //save the user with hashed password and return the user
    const userCreate = new User({
      email: req.body.email,
      password: password_hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    });
    const customer_save = await userCreate.save();

    res.json(customer_save);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    const { error } = validateSignIn(req.body);
    if (error) return res.status(404).json({ msg: error.details[0].message });

    //check if the user exists in the database
    const customer_found = await User.findOne({ email: req.body.email });
    if (!customer_found)
      return res.status(404).json({ msg: `${req.body.email} not found` });

    //check if the password is matched
    const match = await bcrypt.compare(
      req.body.password,
      customer_found.password
    );
    if (!match) return res.status(401).json({ msg: "invalidate credential." });

    //generate token to users and save it to local storage, so user can come back with valiate token
    const token = await jwt.sign(
      { id: customer_found._id },
      process.env.JWT_SECRET
    );
    res.json({
      token,
      user: {
        id: customer_found._id,
        name: customer_found.firstName + " " + customer_found.lastName,
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/tokenIsValidate", async (req, res) => {
  const token = req.header("auth-token");
  if (!token)
    return res
      .status(400)
      .json({ msg: "invalidate token", validate: false, customer: null });

  const token_verify = await jwt.verify(token, process.env.JWT_SECRET);
  if (!token_verify)
    return res
      .status(401)
      .json({ msg: "invalidate token.", validate: false, customer: null });

  const customer_found = await User.findById(token_verify.id);
  if (!customer_found)
    return res
      .status(404)
      .json({ msg: "user not found.", validate: false, customer: null });

  res.json({
    msg: null,
    validate: true,
    customer: {
      id: customer_found._id,
      name: customer_found.firstName + " " + customer_found.lastName,
    },
  });
});

module.exports = router;
