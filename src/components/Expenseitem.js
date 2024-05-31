import "./../components/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const ExpenseItem = (props) => {
  // const expenseDate  = new Date(2024,5,24)
  //const expenseTitle = 'Car Insurance'
  // const expenseAmount = 294.67

  return (
     <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* Amount Div */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      </Card>

  );
};

export default ExpenseItem;
