const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

// Set the operating variables
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";

// Instantiating the app
const app = express();

// Top Level Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routers
const health = require("./routes/health");
const products = require("./routes/products");

// Our Custom logging middleware
app.use((req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${Date.now()}`);
  next();
});

// Attach Routers
app.use("/health", health);
app.use("/products", products);

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
