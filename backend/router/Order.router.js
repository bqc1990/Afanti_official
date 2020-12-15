const router = require("express").Router();
const Order = require("../model/Order.model");
const ID = require("nodejs-unique-numeric-id-generator");

const { validateOrder } = require("../middleware/Validation");

router.post("/create", async (req, res) => {
  try {
    const { error } = validateOrder(req.body);
    console.log(error);
    if (error) return res.status(400).json({ msg: error.details[0].message });
    const order_create = new Order({
      oid: ID.generate(new Date().toJSON()),
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      cartItems: req.body.cartItems,
    });

    const order_saved = await order_create.save();
    res.json(order_saved);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.get("/get", async (req, res) => {
  try {
    const email = req.query.email.trim();

    let order = await Order.find({ email });

    res.json(order);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
