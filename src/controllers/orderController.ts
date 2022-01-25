import { Request, Response } from 'express';
import OrderQueries from '../services/orderQueries';

class OrderController {
  public static async addNewProduct(req: Request, res: Response) {
    try {
      await new OrderQueries().createOrder(
        req.body.productId,
        req.body.costumerId,
        req.body.qtd,
      );
      res.send('pedido registrado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public static async deleteOrder(req: Request, res: Response) {
    try {
      await new OrderQueries().deleteOrder(parseInt(req.params.id, 10));
      res.send('pedido deletado').status(200);
    } catch (e) {
      res.send('Algo deu errado').status(500);
    }
  }

  public static async allOrders(req: Request, res: Response) {
    try {
      const result = await new OrderQueries().seeOrders();
      res.send(result[0]).status(200);
    } catch (e) {
      res.send('Algo deu errado').status(500);
    }
  }
}

export default OrderController;
