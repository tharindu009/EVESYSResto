import express from 'express'
import authUser from '../middleware/authUser.js';
import { addTable, getTables, updateTable } from '../controllers/tableController.js';


const tableRoute = express.Router();

tableRoute.post('/', authUser, addTable);
tableRoute.get('/', authUser, getTables);
tableRoute.put('/:id', authUser, updateTable);


export default tableRoute;