import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import CostumerQueries from '../services/costumerQueries';
import config from '../Configs/secret';

// eu realmente acho que isso não funciona
class ContollerlogIn {
  CostumerService = new CostumerQueries();

  async authuser(req:Request, res:Response) {
    const { username, password } = req.body;

    if (!username || !password) {
      res.send('preencha todos os dados');
    }
    const storedData = await this.CostumerService.getUsernameAndPass(username);
    if (!storedData) {
      res.send('Algo deu errado').status(500);
    } else {
      bcrypt.compare(password, storedData.pass, (err, isMacth) => {
        if (!isMacth) {
          res.send('Senha incorreta');
        } if (isMacth) {
          const token = jwt.sign(req.body, config.secret);
          res.setHeader('authorization', token).status(200).json({
            // é seguro fazer isso?
            menssagem: 'Autorizado',
            token,
          });
        } if (err) {
          res.send('Algo deu errado');
        }
      });
    }
  }
}
export default ContollerlogIn;
