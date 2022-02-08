import { Request, Response } from 'express';
import SpecialQueries from '../services/specialQueries';

class SpecialControllers {
  SpecialService = new SpecialQueries();

  async CostumerController(req:Request, res:Response) {
    try {
      const id = parseInt(req.body.id, 10);
      const results = await this.SpecialService.getCostumerByOrderId(id);
      res.json(results);
    } catch (e) {
      res.send('Ops, algo deu errado');
    }
  }

  async AllCostumers(req: Request, res:Response) {
    try {
      const results = await this.SpecialService.getAllCostumersByOrderId();
      res.json(results);
    } catch (e) {
      throw new Error('Eita, algo de errado não deu certo');
    }
  }

  async products(req:Request, res: Response) {
    try {
      const id = parseInt(req.body.id, 10);
      const results = await this.SpecialService.getProductByOrderId(id);
      res.json(results);
    } catch (e) {
      throw new Error('Eita, algo de errado não deu certo');
    }
  }

  async AllproductsByOrderId(req:Request, res: Response) {
    try {
      const results = await this.SpecialService.getAllProductsByOrderId();
      res.json(results);
    } catch (e) {
      throw new Error('Eita, algo de errado não deu certo');
    }
  }
}

export default SpecialControllers;
