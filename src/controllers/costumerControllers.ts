import { Request, Response } from 'express';

import bcrypt from 'bcrypt';
import CostumerQueries from '../services/costumerQueries';

class CostumerController {
  costumerQuery = new CostumerQueries();

  public async addNewUser(req: Request, res: Response) {
    const {
      name, userName, email, sentPass,
    } = req.body;
    const pass = bcrypt.hashSync(sentPass, 10);
    try {
      await this.costumerQuery.createUser({
        name, userName, email, pass,
      });
      res.send('Usuario criado').status(201);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }
  /* public static async updateUser(req: Request, res:Response) {
    try {

      res.send('informações atualizadas').status(200);
    } catch (e) {
      res.send('algo deu errado').status(500);
    } */

  public async updateUser(req: Request, res:Response) {
    const {
      name, userName, email, newpass,
    } = req.body;
    const id = parseInt(req.params.id, 10);
    try {
      const pass = bcrypt.hashSync(newpass, 10);

      await this.costumerQuery.updateUser({
        name, userName, email, pass,
      }, id);
      res.send('informações atualizadas').status(200);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public async deleteUser(req: Request, res:Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.costumerQuery.deleteUser(id);
      res.send('Usuario deletado').status(200);
    } catch (e) {
      res.send('algo deu errado').status(500);
    }
  }

  public async allUsers(req: Request, res:Response) {
    try {
      const data = await this.costumerQuery.seeUsers();
      res.json(data);
    } catch (e) {
      console.log(e);
      res.send('algo deu errado').status(500);
    }
  }
}

export default CostumerController;
