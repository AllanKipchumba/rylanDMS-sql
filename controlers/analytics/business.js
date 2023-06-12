import { db } from "../../db/db.js";

export const getBusinessStats = (req, res) => {
  try {
    const q = `SELECT
  client,
  COUNT(*) AS frequency,
  SUM(amount) AS total_amount
  FROM
  sales
  GROUP BY
  client;
`;

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const getCashFlowRecord = (req, res) => {
  try {
    const q = `SELECT 
    YEAR(transactionDate) AS year,
    MONTH(transactionDate) AS month,
    SUM(amount) AS total_sales,
    (SELECT COALESCE(SUM(amount), 0) FROM expenses WHERE YEAR(transactionDate) = year AND MONTH(transactionDate) = month) AS total_expenses,
    (SELECT COALESCE(SUM(amount), 0) FROM credits WHERE YEAR(transactionDate) = year AND MONTH(transactionDate) = month) AS total_credits
    FROM sales
    GROUP BY YEAR(transactionDate), MONTH(transactionDate)
    ORDER BY YEAR(transactionDate), MONTH(transactionDate);
`;

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
