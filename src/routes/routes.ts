import { Router } from 'express';
import costumerController from '../controllers/costumerControllers';
import StockController from '../controllers/stockControllers';
import OrderController from '../controllers/orderController';

const app = Router();

app.post('/createUser', costumerController.addNewUser);
app.post('/addproduct', StockController.addNewIten);
app.post('/createorder', OrderController.addNewProduct);
