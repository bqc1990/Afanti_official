const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  sizes: {
    type: Array,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
