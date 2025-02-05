const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const purchaseRouter = require("./routes/purchaseRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/purchase", purchaseRouter);

//server
app.listen(PORT, async () => {
  await connect();
  console.log(`Server up and running on port: ${PORT}`);
});
