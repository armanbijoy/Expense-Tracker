import { useState } from "react";
import "../NewExpense/NewExpense.css";
const ExpenseForm = (props) => {
  const [title, setEnteredTitle]  = useState('')
  const [amount, setEnteredAmount] = useState('')
  const [date, setEnteredDate] = useState('')
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });


    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle:event.target.value}
    // })

    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState, enteredAmount:event.target.value}
    // })

    setEnteredAmount(event.target.value)

  };
  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState, enteredDate:event.target.value}
    // })

    setEnteredDate(event.target.value)
  };

// const inputChangeHandler = (identifier, value)=>{
//   if(identifier === 'title'){
//     setEnteredTitle(value)
//   }
//   else if(identifier === 'date'){
//     setEnteredDate(value)
//   }else{
//     setEnteredAmount(value)
//   }

// }

const submitHandler = (event)=>{
    event.preventDefault()
   
    const expenseData = {
      title,
      amount,
      date: new Date(date)
    }
    
    props.onSaveExpenseData(expenseData)
    setEnteredAmount('')
    setEnteredTitle('')
    setEnteredDate('')

}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={date}
            type="date"
            min="2013-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
