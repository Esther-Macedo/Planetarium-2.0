import { Request, Response } from 'express';
import StockQueries from '../services/stockQueries';

class StockController {
  public static async addNewIten(req: Request, res: Response) {
    try {
      await StockQueries.createStock(
        req.body.name,
        req.body.class,
        req.body.life,
        req.body.details,
        req.body.qtd,

      );
      res.send('produto adicionado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public static async allItens(req:Request, res:Response) {
    try {
      const data = await StockQueries.seeStock();
      res.json(data[0]).status(200);
    } catch (e) { res.send('algo deu errado').status(500); }
  }
}

export default StockController;
