import ExpenseItem from "./components/Expenseitem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
    },
    {
      id: "e2",
      title: "New Phone",
      amount: 500.0,
      date: new Date(),
    },
    {
      id: "e3",
      title: "Toilet Papper",
      amount: 80.0,
      date: new Date(),
    },
    {
      id: "e4",
      title: "Udemy Course",
      amount: 9.9,
      date: new Date(),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
