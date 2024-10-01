import { where } from "sequelize";
import Expenses from "../models/expenses.js";

export async function postExpenses(req, res) {
  const { amount, description, category } = req.body;
  try {
    const newExpense = await Expenses.create({
      amount: amount,
      description: description,
      category: category,
    });
    res.status(201).json({
      newExpense,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something wrong happens while posting",
    });
  }
}
export async function getExpenses(req, res) {
  try {
    const expenseList = await Expenses.findAll();

    res.status(201).json({ expenseList });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Records Not found",
    });
  }
}

export async function getExpensesById(req, res) {
  const { id } = req.params;

  try {
    const expense = await Expenses.findByPk(id);
    res.status(201).json({ expense });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Records Not found",
    });
  }
}

export async function deleteExpense(req, res) {
  const { id } = req.params;
  try {
    const deleteexpense = await Expenses.destroy({ where: { id } });
    res.status(201).json({ Message: "Deleted Succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error in deleting",
    });
  }
}
