import express from 'express'
import { addOrder, getOrderById, getOrders, updateOrder } from '../controllers/orderController.js';
import authUser from '../middleware/authUser.js';


const orderRouter = express.Router();


orderRouter.post('/', authUser, addOrder);
orderRouter.get('/', authUser, getOrders);
orderRouter.get('/:id', authUser, getOrderById);
orderRouter.put('/:id', authUser, updateOrder);


export default orderRouter;
