import "./../components/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
const ExpenseItem = (props) => {
 
 const [title, setTitle] = useState(props.title)
 console.log('ExpenseItem Eveliated By React')

 //let title = props.title

  const clickHandler = ()=>{
    setTitle('Updated')
  }

  return (
     <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* Amount Div */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} >Change Titile</button>
      </Card>

  );
};

export default ExpenseItem;
