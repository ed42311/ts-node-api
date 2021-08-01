// Configuration for database connection Pool
import { Pool, PoolConfig } from "pg";
import { config } from "dotenv";

const isProduction = process.env.NODE_ENV === "production";

config();

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const poolConfig: PoolConfig = {
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
};

const pool = new Pool(poolConfig);

export { pool };
