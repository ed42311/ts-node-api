const express = require("express");
const router = express.Router();
const { pool } = require("../config");

const checkDb = (request, response) => {
  pool.query("SELECT table_name FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    return results ? true : false;
  });
};

router.get("/", function (req, res) {
  res.json({
    api: "is green",
    db: `${checkDb ? "is connected" : "is not connected"}`,
  });
});

module.exports = router;
