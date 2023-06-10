import {
  processAndDeleteData,
  processAndFetchData,
  processAndInsertData,
  processAndUpdateData,
} from "./utils.js";

//POST A TRANSACTION
export const addSale = (req, res) => {
  return processAndInsertData(req, res, "sales");
};
export const addExpense = (req, res) => {
  return processAndInsertData(req, res, "expenses");
};
export const addCredit = (req, res) => {
  return processAndInsertData(req, res, "credits");
};

/*FETCH A TRANSACTION*/
export const fetchSale = (req, res) => {
  return processAndFetchData(req, res, "sales");
};
export const fetchExpense = (req, res) => {
  return processAndFetchData(req, res, "expenses");
};
export const fetchCredit = (req, res) => {
  return processAndFetchData(req, res, "credits");
};

//UPDATE A TRANSACTION
export const updateSale = (req, res) => {
  return processAndUpdateData(req, res, "sales");
};
export const updateExpense = (req, res) => {
  return processAndUpdateData(req, res, "expenses");
};
export const updateCredit = (req, res) => {
  return processAndUpdateData(req, res, "credits");
};

//DELETE A TRANSACTION
export const deleteSale = (req, res) => {
  return processAndDeleteData(req, res, "sales");
};
export const deleteExpense = (req, res) => {
  return processAndDeleteData(req, res, "expenses");
};
export const deleteCredit = (req, res) => {
  return processAndDeleteData(req, res, "credits");
};
