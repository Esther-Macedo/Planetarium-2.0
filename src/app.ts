import express, { Application } from 'express';
import router from './routes/routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.namaewa();
    this.routes();
  }

  private namaewa() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(router);
  }
}

export default new App().app;
