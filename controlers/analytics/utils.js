import { db } from "../../db/db.js";

export function processAndInsertData(req, res, tableName) {
  // Clean all string values in req.body to lowercase
  Object.values(req.body).map((value, index) => {
    if (typeof value === "string") {
      const cleanedValue = value.toLowerCase();
      // Assign the cleaned value back to the corresponding key in req.body
      const keys = Object.keys(req.body);
      req.body[keys[index]] = cleanedValue;
    }
  });

  //get the column names
  const columns = Object.keys(req.body)
    .map((key) => `\`${key}\``)
    .join(", ");
  const values = Object.values(req.body); //get the column values

  const query = `INSERT INTO ${tableName} (${columns}) VALUES (?)`;

  db.query(query, [values], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
}
