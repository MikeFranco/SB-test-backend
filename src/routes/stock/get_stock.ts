import express from "express";
import { createQueryBuilder } from 'typeorm';
import { Stock } from '../../entities/Stock';

const router = express.Router();

router.get('/api/stocks', async(req,res) => {
  const stocks = await createQueryBuilder('stock')
    .select('stock')
    .from(Stock, 'stock')
    .getMany()

  return res.json(stocks);
})

export { router as getStockRouter }

