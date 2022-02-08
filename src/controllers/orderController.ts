import { Request, Response } from 'express';
import OrderQueries from '../services/orderQueries';

class OrderController {
  OrderService = new OrderQueries();

  public async addNewProduct(req: Request, res: Response) {
    try {
      await this.OrderService.createOrder(
        req.body.productId,
        req.body.costumerId,
        req.body.qtd,
      );
      res.send('pedido registrado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public async deleteOrder(req: Request, res: Response) {
    try {
      await this.OrderService.deleteOrder(parseInt(req.params.id, 10));
      res.send('pedido deletado').status(200);
    } catch (e) {
      res.send('Algo deu errado').status(500);
    }
  }

  public async allOrders(req: Request, res: Response) {
    try {
      const result = await this.OrderService.seeOrders();
      res.send(result).status(200);
    } catch (e) {
      res.send('Algo deu errado').status(500);
    }
  }
}

export default OrderController;
