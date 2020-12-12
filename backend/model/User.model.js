const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    default: "Valued",
  },
  lastName: {
    type: String,
    default: "Customer",
  },
  address: {
    type: String,
    default: " 1234 Main st",
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  zip: {
    type: Number,
  },
});

module.exports = mongoose.model("Customer", userSchema);
