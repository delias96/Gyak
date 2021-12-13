require("dotenv").config();
require('express-async-errors')
const express = require("express");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();
const notFound = require("./middleware/not-found");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send('<h1>Store Api</h1> <a href="/api/v1/products">products route</a>');
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();