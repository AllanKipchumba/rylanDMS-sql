import express from "express";
import {
  monthCredits,
  monthExpenses,
  monthSales,
} from "../controlers/analytics/monthly.js";
import {
  clientTransactionHistory,
  ourClients,
} from "../controlers/analytics/clients.js";
import {
  getBusinessStats,
  getCashFlowRecord,
} from "../controlers/analytics/business.js";

const router = express.Router();

router.post("/month/sales", monthSales);
router.post("/month/expenses", monthExpenses);
router.post("/month/credits", monthCredits);

router.get("/ourClients", ourClients);
router.get("/:client", clientTransactionHistory);

router.get("/stats", getBusinessStats);
router.get("/cashflow", getCashFlowRecord);

export default router;
