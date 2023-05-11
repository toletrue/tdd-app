const express = require("express");
const mongoose = require("mongoose");

const PORT = 5000;

const app = express();
const productRoutes = require("./routes/product.route");

mongoose
  .connect(
    "mongodb+srv://toletrue:abcd1234@cluster0.xgwz0nt.mongodb.net/cluster0?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
