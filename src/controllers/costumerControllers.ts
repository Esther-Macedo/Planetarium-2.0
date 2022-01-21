import { Request, Response } from 'express';
import CostumerQueries from '../services/costumerQueries';

class CostumerController {
  public static async addNewUser(req: Request, res: Response) {
    try {
      await CostumerQueries.createUser(
        req.body.id,
        req.body.fristName,
        req.body.lastName,
        req.body.em,
        req.body.pass,
      );
      res.send('usuario criado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }
}

export default CostumerController;
