import { db } from "../../db/db.js";

// export const getCashFlowRecord = (req, res) => {
//   try {
//     const q = `SSELECT
//     YEAR(transactionDate) AS year,
//     MONTH(transactionDate) AS month,
//     SUM(sales.amount) AS total_sales,
//     SUM(expenses.amount) AS total_expenses,
//     SUM(credits.amount) AS total_credits
// FROM
//     sales
//     LEFT JOIN expenses ON YEAR(sales.transactionDate) = YEAR(expenses.transactionDate) AND MONTH(sales.transactionDate) = MONTH(expenses.transactionDate)
//     LEFT JOIN credits ON YEAR(sales.transactionDate) = YEAR(credits.transactionDate) AND MONTH(sales.transactionDate) = MONTH(credits.transactionDate)
// GROUP BY
//     YEAR(transactionDate),
//     MONTH(transactionDate)
// ORDER BY
//     YEAR(transactionDate),
//     MONTH(transactionDate);

// `;

//     db.query(q, (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data);
//     });
//   } catch (error) {
//     res.status(500).json(error);
//     console.log(error);
//   }
// };
