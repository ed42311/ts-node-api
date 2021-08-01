import { Router, Request, Response } from "express";
import { QueryResult } from "pg";

const router = Router();
const { pool } = require("../config");

const getAllProducts = (req: Request, res: Response) => {
  pool.query("SELECT * FROM products", (error: Error, results: QueryResult) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

router.get("/", getAllProducts);

export { router as products };
