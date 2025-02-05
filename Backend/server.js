const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connect();
  console.log(`Server up and running on port: ${PORT}`);
});
