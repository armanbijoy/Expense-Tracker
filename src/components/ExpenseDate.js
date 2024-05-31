import '../../src/components/ExpenseDate.css'
const ExpenseDate  =(props)=>{
    const time = props.date.toISOString().split('T')[0];
    return(
        <div className="expense-date">{time}</div>
    )

}
export default ExpenseDate