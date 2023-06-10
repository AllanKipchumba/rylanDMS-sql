import { processAndFetchMonthsData } from "../utils.js";

export const monthSales = (req, res) => {
  return processAndFetchMonthsData(req, res, "sales");
};

export const monthExpenses = (req, res) => {
  return processAndFetchMonthsData(req, res, "expenses");
};

export const monthCredits = (req, res) => {
  return processAndFetchMonthsData(req, res, "credits");
};

export const monthsTransactionSummary = (req, res) => {
  //get total sales, expenses, credits, debits, revenue
};
