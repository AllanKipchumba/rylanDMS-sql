import {
  processAndDeleteData,
  processAndFetchData,
  processAndInsertData,
  processAndUpdateData,
} from "./utils.js";

//POST A TRANSACTION
export const addSale = (req, res) => processAndInsertData(req, res, "sales");
export const addExpense = (req, res) =>
  processAndInsertData(req, res, "expenses");
export const addCredit = (req, res) =>
  processAndInsertData(req, res, "credits");

/*FETCH A TRANSACTION*/
export const fetchSale = (req, res) => processAndFetchData(req, res, "sales");
export const fetchExpense = (req, res) =>
  processAndFetchData(req, res, "expenses");
export const fetchCredit = (req, res) =>
  processAndFetchData(req, res, "credits");

//UPDATE A TRANSACTION
export const updateSale = (req, res) => processAndUpdateData(req, res, "sales");
export const updateExpense = (req, res) =>
  processAndUpdateData(req, res, "expenses");
export const updateCredit = (req, res) =>
  processAndUpdateData(req, res, "credits");

//DELETE A TRANSACTION
export const deleteSale = (req, res) => processAndDeleteData(req, res, "sales");
export const deleteExpense = (req, res) =>
  processAndDeleteData(req, res, "expenses");
export const deleteCredit = (req, res) =>
  processAndDeleteData(req, res, "credits");
