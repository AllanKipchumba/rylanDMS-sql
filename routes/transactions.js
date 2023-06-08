import express from "express";
import {
  addCredit,
  addExpense,
  addSale,
  deleteCredit,
  deleteExpense,
  deleteSale,
  fetchCredit,
  fetchExpense,
  fetchSale,
  updateCredit,
  updateExpense,
  updateSale,
} from "../controlers/transactions.js";

const router = express.Router();

//post a transaction
router.post("/sale", addSale);
router.post("/credit", addCredit);
router.post("/expense", addExpense);

//fetch a transaction
router.get("/sales/:id", fetchSale);
router.get("/expenses/:id", fetchExpense);
router.get("/credits/:id", fetchCredit);

//update a transaction
router.patch("/sales/:id", updateSale);
router.patch("/expenses/:id", updateExpense);
router.patch("/credits/:id", updateCredit);

//delete a transaction
router.delete("/sales/:id", deleteSale);
router.delete("/expenses/:id", deleteExpense);
router.delete("/credits/:id", deleteCredit);

export default router;
