const express = require("express");
const User = require("../Schema/user");
const router = express.Router();

//Add items to cart
router.post("/add", async (req, res) => {
  const { email, productId, quantity } = req.body;
  let user = await User.findOne({ email });

  //validate user
  if (!user) {
    user = new User({ email, cart: [] });
  }

  //push product to cart
  user.cart.push({ product: productId, quantity });
  await user.save();

  res.json(user.cart);
});

//Get cart items
router.get("/:email", async (req, res) => {
  const user = await User.findOne({ email: req.params.email }).populate(
    "cart.product"
  );
  res.json(user.cart);
});

module.exports = router;
