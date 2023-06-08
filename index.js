import express from "express";
import authRoutes from "./routes/auth.js";
import transactionsRoutes from "./routes/transactions.js";
import analyticsRoutes from "./routes/analytics.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/transactions", transactionsRoutes);
app.use("/analytics", analyticsRoutes);

app.listen(8080, () => console.log("Server connected"));
