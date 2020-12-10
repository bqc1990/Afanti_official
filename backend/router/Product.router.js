const router = require("express").Router();
const Product = require("../model/Product.model");

router.get("/all", async (req, res) => {
  try {
    let query = "";
    if (req.body.title) {
      query = req.query.title.trim();
    }

    let products;
    if (query === "" || query === null) {
      products = await Product.find();
    } else {
      products = await Product.find({
        title: { $regex: `.*${query}.*`, $options: "i" },
      });
    }

    res.json(products);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});
router.post("/add", async (req, res) => {
  const productCreate = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    sizes: req.body.sizes,
    image: req.body.image,
  });
  const product_save = await productCreate.save();
  res.json({ product_save });
});

module.exports = router;
