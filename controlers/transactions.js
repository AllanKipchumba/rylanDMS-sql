import { db } from "../db/db.js";
import { processAndInsertData } from "./analytics/utils.js";

//POST A TRANSACTION
export const addSale = (req, res) => {
  try {
    processAndInsertData(req, res, "sales");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const addExpense = (req, res) => {
  try {
    processAndInsertData(req, res, "expenses");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
export const addCredit = (req, res) => {
  try {
    processAndInsertData(req, res, "credits");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//FETCH A TRANSACTION
export const fetchSale = (req, res) => {};
export const fetchExpense = (req, res) => {};
export const fetchCredit = (req, res) => {};

//UPDATE A TRANSACTION
export const updateSale = (req, res) => {};
export const updateExpense = (req, res) => {};
export const updateCredit = (req, res) => {};

//DELETE A TRANSACTION
export const deleteSale = (req, res) => {};
export const deleteExpense = (req, res) => {};
export const deleteCredit = (req, res) => {};
