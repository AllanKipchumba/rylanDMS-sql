import { db } from "../db/db.js";

export function getStartAndEndOfMonth(month, year) {
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

  return {
    startOfMonth,
    endOfMonth,
  };
}

//POST TRANSACTION
export const processAndInsertData = (req, res, tableName) => {
  try {
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
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//FETCH TRANSACTION
export const processAndFetchData = (req, res, tableName) => {
  try {
    const q = `SELECT * FROM ${tableName} WHERE id = ?`;

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//UPDATE TRANSACTION
export const processAndUpdateData = (req, res, tableName) => {
  try {
    const columns = Object.keys(req.body);
    const values = Object.values(req.body);

    const updates = columns.map((column) => `${column} = ?`).join(", ");

    const q = `UPDATE ${tableName} SET ${updates} WHERE id = ?`;

    db.query(q, [values, req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//DELETE TRANSACTION
export const processAndDeleteData = (req, res, tableName) => {
  try {
    const q = `DELETE FROM ${tableName} WHERE id = ? `;

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//FETCH A MONTH'S DATA
export const processAndFetchMonthsData = (req, res, tableName) => {
  try {
    const { startOfMonth, endOfMonth } = getStartAndEndOfMonth(
      req.body.month,
      req.body.year
    );
    const q = `SELECT * FROM ${tableName} WHERE transactionDate BETWEEN (?) AND (?)`;

    db.query(q, [startOfMonth, endOfMonth], (err, data) => {
      if (err) return res.status(500).json(err);

      //returns month's totals
      const totalAmount = data.reduce(
        (sum, records) => sum + records.amount,
        0
      );

      return res.status(200).json({ totalAmount, data });
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//FETCH MONTHS TRANSACTION SUMMARY
export const processAndFetchMonthsSummary = (req, res) => {
  const { startOfMonth, endOfMonth } = getStartAndEndOfMonth(
    req.body.month,
    req.body.year
  );

  const q = `SELECT
    (SELECT SUM(amount) FROM sales WHERE transactionDate BETWEEN ? AND ?) AS totalSales,
    (SELECT SUM(amount) FROM expenses WHERE transactionDate BETWEEN ? AND ?) AS totalExpenses,
    (SELECT SUM(amount) FROM credits WHERE transactionDate BETWEEN ? AND ?) AS totalCredits`;

  db.query(q, [startOfMonth, endOfMonth], (err, data) => {});
};
