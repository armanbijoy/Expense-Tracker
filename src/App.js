import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Expenseitem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [filteredYear, setFilteredYear] = useState('2020')
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  let filteredInfoText = '2019,2021 & 2022'

  if(filteredYear === '2019'){
    filteredInfoText='2020,2021,2022'
  }else if(filteredYear ==='2021'){
    filteredInfoText('2019,2020,2022')
  }else{
    filteredInfoText='2019,2020 &2021'
  }

  const addExpenseHandler = expense =>{
    console.log("In App.js")
    console.log(expense)
  }
  return (
    <Card>
      <h2>Lets Get Started</h2>
      <NewExpense onAddExpense = {addExpenseHandler} />
       <p>Data for 2019,2021,2023 is hidden</p>
      <Expenseitem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Expenseitem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Expenseitem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Expenseitem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default App;
