import express from 'express';
import {getExpenses, postExpenses, getExpensesById, deleteExpense} from '../controllers/expenseController.js';
const router = express.Router();
router.get('/get-expense/:id',getExpensesById);
router.post('/add-expenses',postExpenses);
router.get('/get-expenses-list',getExpenses);
router.delete('/delete-expense/:id',deleteExpense)
export default router;