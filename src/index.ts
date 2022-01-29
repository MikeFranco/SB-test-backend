import { createConnection } from 'typeorm'
import express from 'express';
import { Stock } from './entities/Stock';
import { User } from './entities/User';
import { createStockRouter } from './routes/stock/create_stock';
import { deleteStockRouter } from './routes/stock/delete_stock';
import { getStockRouter } from './routes/stock/get_stock';

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: "user",
      password: "password",
      database: "catalog",
      entities: [Stock, User],
      synchronize: true
    })
    console.log('connected to postgres');
    
    app.use(express.json());
    app.use(createStockRouter);
    app.use(deleteStockRouter);
    app.use(getStockRouter);

    app.get('/', (req, res) => {
      res.send('Nothing to see here! 👀');
    })

    app.listen(8080, () => {
      console.log('running on port 8080');
    })

  } catch (error){
    console.log(error);
    throw new Error('Unable to connect to db')
  }
}

main()