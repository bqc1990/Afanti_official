const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  oid: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
    default: "Valued",
  },
  lastName: {
    type: String,
    default: "Customer",
  },
  cartItems: {
    type: Array,
  },
});

module.exports = mongoose.model("Order", orderSchema);
