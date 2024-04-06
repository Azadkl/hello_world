import React from "react";
import ExpenseItem from "./Expenseitem";
import "./ExpenseList.css";
const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__falback">No expenses found</h2>
  );

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return expensesContent;
};

export default ExpensesList;