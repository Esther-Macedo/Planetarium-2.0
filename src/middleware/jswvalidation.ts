import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../Configs/secret';
// dessa vez os erros vão como json só pra testar

const checktoken = function checkvalidtoken(req: Request, res:Response, next: NextFunction) {
  // esse finalzinho serve para selecionar a parte que interessas no header

  try {
    // const token = req.headers.authorization?.split(' ')[1];
    const token = req.headers.authorization;
    if (!token) {
      res.status(400).json({
        message: 'Autenticação falhou, talvez você não devesse estar aqui',
      });
    } else {
      jwt.verify(token, config.secret);
      next();
    }
  } catch (e) {
    res.json({ mensagem: 'Algo deu errado' }).status(401);
  }
};

export default checktoken;
