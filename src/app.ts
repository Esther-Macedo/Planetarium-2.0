import express, { Application } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';
import errorHandling from './Error/ErrorHandling';

dotenv.config();

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.namaewa();
    this.routes();
    this.iferror();
  }

  private namaewa() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private iferror() {
    this.app.use(errorHandling);
  }

  private routes() {
    this.app.use(router);
  }
}

export default new App().app;
