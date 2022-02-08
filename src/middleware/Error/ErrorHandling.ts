import { Request, Response, NextFunction } from 'express';

async function errorHandling(err: Error, req: Request, res:Response, next:NextFunction) {
  res.status(500).send(next(err));
}

export default errorHandling;
