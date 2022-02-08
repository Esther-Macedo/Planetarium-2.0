import { Request, Response } from 'express';
import StockQueries from '../services/stockQueries';

class StockController {
  StockService = new StockQueries();

  public async addNewIten(req: Request, res: Response) {
    try {
      const {
        productname, type, lifesupport, details, qtd,
      } = req.body;
      await this.StockService.createStock({
        productname, type, lifesupport, details, qtd,
      });
      res.send('produto adicionado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public async allItens(req:Request, res:Response) {
    try {
      const data = await this.StockService.seeStock();
      res.json(data[0]).status(200);
    } catch (e) { res.send('algo deu errado').status(500); }
  }
}

export default StockController;
