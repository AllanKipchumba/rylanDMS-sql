import mysql from "mysql2";
import { db_key } from "../config/config.js";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: db_key,
  database: "rylan",
});
