import express from 'express';
import { Stock } from '../../entities/Stock';

const router = express.Router();

router.delete("/api/stock/:stockId", async(req, res) => {
  const {stockId} = req.params;

  const response = await Stock.delete(parseInt(stockId));

  return res.json(response);

})

export {
  router as deleteStockRouter
}