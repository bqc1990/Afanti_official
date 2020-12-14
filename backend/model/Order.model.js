const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
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
  country: {
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
    default: "30340",
  },
});

module.exports = mongoose.model("Order", orderSchema);
