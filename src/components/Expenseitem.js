import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

function ExpenseItem({title,date,amount}) {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
