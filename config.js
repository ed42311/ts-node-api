// Configuration for database connection Pool
const { Pool } = require("pg");

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = ((isProduction) => {
  console.log(`Connecting to Postgres in... ${isProduction ? "prod" : "dev"}`);
  return new Pool({
    connectionString: isProduction
      ? process.env.DATABASE_URL
      : connectionString,
    ssl: isProduction,
  });
})();

module.exports = { pool };
