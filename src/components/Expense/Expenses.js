import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterChangeHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses