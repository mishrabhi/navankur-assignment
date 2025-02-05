const express = require("express");
const Product = require("../Schema/product");
const router = express.Router();

//Fetch all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//Get a single product using ID
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

module.exports = router;
