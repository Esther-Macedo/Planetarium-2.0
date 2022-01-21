import express, { Application } from 'express';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.namaewa();
  }

  private namaewa() {
    this.app.use(express.json());
  }
}

export default new App().app;
