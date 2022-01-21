import { Request, Response } from 'express';
import StockQueries from '../services/stockQueries';

class StockController {
  public static async addNewIten(req: Request, res: Response) {
    try {
      await StockQueries.createStock(
        req.body.title,
        req.body.author,
        req.body.description,
        req.body.release,

      );
      res.send('usuario criado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }
}

export default StockController;
