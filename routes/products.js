const express = require("express");
const router = express.Router();
const { pool } = require("../config");

const getAllProducts = (request, response) => {
  pool.query("SELECT * FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

router.get("/", getAllProducts);

module.exports = router;
