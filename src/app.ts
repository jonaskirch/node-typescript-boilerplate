import 'reflect-metadata';
import '@config/dotenv';
import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import routes from '@routes/index';
import '@database/index';

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes() {
    this.server.use('/api', routes);
  }
}

export default new App().server;
