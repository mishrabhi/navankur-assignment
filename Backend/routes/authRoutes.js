const express = require("express");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //api request to reqres
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });

    //Generate JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(401).send({ error: "Invalid credentials" });
  }
});

module.exports = router;
