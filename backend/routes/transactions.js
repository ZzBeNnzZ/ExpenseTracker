const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controller/expense");
const { addIncome, deleteIncome, getIncome } = require("../controller/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-income", getIncome)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
