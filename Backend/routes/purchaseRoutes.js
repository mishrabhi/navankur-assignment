const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, cart, totalPrice } = req.body;

  //Sending data to webhook
  const webhookURL =
    "https://webhook.site/7ea84feb-b2ac-4db2-9232-4b50af765a61";
  await axios.post(webhookURL, { email, cart, totalPrice });

  res.json({ message: "Purchase Completed" });
});

module.exports = router;
