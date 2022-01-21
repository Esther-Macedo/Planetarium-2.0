import { Request, Response } from 'express';
import OrderQueries from '../services/orderQueries';

class OrderController {
  public static async addNewProduct(req: Request, res: Response) {
    try {
      await OrderQueries.createOrder(
        req.body.costumerId,
        req.body.productId,
        req.body.qtd,
      );
      res.send('usuario criado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }
}

export default OrderController;
