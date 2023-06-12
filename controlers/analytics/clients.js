import { db } from "../../db/db.js";

export const ourClients = (req, res) => {
  //return all clients, revenue, frequency. sort by revenue/frequency
  try {
    const q = `
    SELECT
    client,
    SUM(amount) AS revenue,
    COUNT(*) AS frequency FROM sales
    GROUP BY client ORDER BY revenue DESC;    
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

export const clientTransactionHistory = (req, res) => {
  //return frequency, total revenue, records
  try {
    const q = `SELECT * FROM sales WHERE client = ?`;
    db.query(q, [req.params.client], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
