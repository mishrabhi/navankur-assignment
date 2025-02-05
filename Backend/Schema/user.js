const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },

  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        quantity: Number,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
