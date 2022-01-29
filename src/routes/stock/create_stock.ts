import express from 'express';
import { Stock } from '../../entities/Stock';
import {emailMessage} from '../../utils/mailer';

const router = express.Router();

router.post('/api/stock', async(req, res) => {
  const {
    ticker,
    stock_name,
    price,
    category,
    times_queried,
  } = req.body;

  try {
    const stock = Stock.create({
      ticker,
      stock_name,
      price,
      category,
      times_queried,
    });
  
    await stock.save();
    return await emailMessage(req, res);

    //return res.json(stock);

  } catch(error){
    return res.json(error);
  }

});

export {
  router as createStockRouter
}