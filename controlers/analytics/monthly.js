import { db } from "../../db/db.js";
import { getStartAndEndOfMonth, processAndFetchMonthsData } from "../utils.js";

export const monthSales = (req, res) => {
  return processAndFetchMonthsData(req, res, "sales");
};

export const monthExpenses = (req, res) => {
  return processAndFetchMonthsData(req, res, "expenses");
};

export const monthCredits = (req, res) => {
  return processAndFetchMonthsData(req, res, "credits");
};

export const monthsTransactionTotals = (req, res) => {
  try {
    const { startOfMonth, endOfMonth } = getStartAndEndOfMonth(
      req.body.month,
      req.body.year
    );

    const q = `SELECT
      (SELECT SUM(amount) FROM sales WHERE transactionDate BETWEEN ? AND ?) AS totalSales,
      (SELECT SUM(amount) FROM expenses WHERE transactionDate BETWEEN ? AND ?) AS totalExpenses,
      (SELECT SUM(amount) FROM credits WHERE transactionDate BETWEEN ? AND ?) AS totalCredits`;

    const queryParams = [startOfMonth, endOfMonth];
    db.query(
      q,
      [...queryParams, ...queryParams, ...queryParams],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      }
    );
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const monthCreditorTotals = (req, res) => {
  try {
    const { startOfMonth, endOfMonth } = getStartAndEndOfMonth(
      req.body.month,
      req.body.year
    );

    const q = `SELECT creditor, SUM(amount) AS totalAmount
    FROM credits
    WHERE transactionDate BETWEEN ? AND ?
    GROUP BY creditor`;

    db.query(q, [startOfMonth, endOfMonth], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
