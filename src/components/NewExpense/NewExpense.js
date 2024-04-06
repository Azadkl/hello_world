import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onAddExpense}></ExpenseForm>
    </div>
  );
}

export default NewExpense;