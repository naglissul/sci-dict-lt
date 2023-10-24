const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: process.env.POSTGRES_PORT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

process.on("SIGINT", () => {
  console.log("Shutting down...");
  pool.end(() => {
    console.log("Pool has been closed.");
    process.exit(0);
  });
});

module.exports = pool;