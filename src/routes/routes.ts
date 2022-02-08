import { Router } from 'express';
import ContollerlogIn from '../controllers/authcontrollers';
import CostumerController from '../controllers/costumerControllers';
import OrderController from '../controllers/orderController';
import SpecialControllers from '../controllers/specialController';
import StockController from '../controllers/stockControllers';
import checktoken from '../middleware/jswvalidation';

const router = Router();
// fazendo aqui de um jeito diferente só pra testar
const costControll = new CostumerController();
const StockControll = new StockController();
const orderControll = new OrderController();
const SpecialController = new SpecialControllers();
const login = new ContollerlogIn();
/// Rotas de login??
router.post('/login', login.authuser);
/// Costumers
router.post('/createCostumer', costControll.addNewUser);
router.put('/updateCostumer/:id', [checktoken], costControll.updateUser);
router.delete('/deleteCostumer/:id', [checktoken], costControll.deleteUser);
router.get('/allCostumers', [checktoken], costControll.allUsers);
/// Products
router.post('/addProduct', StockControll.addNewIten);
router.get('/allProducts', StockControll.allItens);

/// Orders
router.post('/createOrder', [checktoken], orderControll.addNewProduct);
router.delete('/deleteOrder/:id', orderControll.deleteOrder);
router.get('/allOrders', orderControll.allOrders);

// Rotas especiais
router.get('/costumersByOrderId/:id', SpecialController.CostumerController);
router.get('/allCostumersByOrderId', SpecialController.AllCostumers);
router.get('/productsByOrderId/:id', SpecialController.products);
router.get('/allProductsByOrderId', SpecialController.AllproductsByOrderId);

export default router;
