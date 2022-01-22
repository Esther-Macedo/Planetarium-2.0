import { Request, Response } from 'express';
import SpecialQueries from '../services/specialQueries';

class SpecialControllers {
  static async CostumerController(req:Request, res:Response) {
    try {
      const results = await new SpecialQueries().getCostumerByOrderId(parseInt(req.params.id, 10));
      res.json(results[0]);
    } catch (e) {
      res.send('Ops, algo deu errado');
      console.log(e);
    }
  }

  static async AllCostumers(req: Request, res:Response) {
    try {
      const results = await new SpecialQueries().getAllCostumersByOrderId();
      res.json(results[0]);
    } catch (e) {
      console.log(e);
      throw new Error('Eita, algo de errado não deu certo');
    }
  }

  static async products(req:Request, res: Response) {
    try {
      const results = await new SpecialQueries().getProductByOrderId(parseInt(req.params.id, 10));
      res.json(results[0]);
    } catch (e) {
      console.log(e);
      throw new Error('Eita, algo de errado não deu certo');
    }
  }

  static async AllproductsByOrderId(req:Request, res: Response) {
    try {
      const results = await new SpecialQueries().getAllProductsByOrderId();
      res.json(results[0]);
    } catch (e) {
      console.log(e);
      throw new Error('Eita, algo de errado não deu certo');
    }
  }
}

/* static async CostumerController(req:Request, res:Response) {
    try {
      const results = await new SpecialQueries().getcostumer(parseInt(req.params.id, 10));
      res.json(results[0]);
    } catch (e) {
      throw new Error('Eita, algo de errado não deu certo');
    }
  }

  static async Costumers(req: Request, res:Response) {
    try {
      const results = await new SpecialQueries().getAllcostumers();
      res.json(results[0]);
    } catch (e) {
      console.log(e);
      throw new Error('Eita, algo de errado não deu certo');
    }
  } */

export default SpecialControllers;
