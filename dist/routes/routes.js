"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const costumerControllers_1 = __importDefault(require("../controllers/costumerControllers"));
/* import StockController from '../controllers/stockControllers';
import OrderController from '../controllers/orderController';
import SpecialControllers from '../controllers/specialController'; */
const router = (0, express_1.Router)();
const costControl = new costumerControllers_1.default();
/// Costumers
/* router.post('/createCostumer', costumerController.addNewUser);
router.put('/updateCostumer/:id', costumerController.updateUser);
router.delete('/deleteCostumer/:id', costumerController.deleteUser); */
router.get('/allCostumers', costControl.allUsers);
/// Products
/* router.post('/addProduct', StockController.addNewIten);
router.get('/allProducts', StockController.allItens); */
/// Orders
/* router.post('/createOrder', OrderController.addNewProduct);
router.delete('/deleteOrder/:id', OrderController.deleteOrder);
router.get('/allOrders', OrderController.allOrders); */
// Rotas especiais
/* router.get('/costumersByOrderId/:id', SpecialControllers.CostumerController);
router.get('/allCostumersByOrderId', SpecialControllers.AllCostumers);
router.get('/productsByOrderId/:id', SpecialControllers.products);
router.get('/allProductsByOrderId', SpecialControllers.AllproductsByOrderId);
 */
exports.default = router;
