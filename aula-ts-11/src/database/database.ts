import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "wilkermizael", // seu user
  password: "1534", // sua senha
  database: "users",
});

export { connection };
