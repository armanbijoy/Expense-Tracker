import '../NewExpense/NewExpense.css'
const ExpenseForm = ()=>{
    return(
       <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" min="0.01" step="0.01"/>
            </div>

            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2013-01-01" max="2024-12-31"/>
            </div>

        </div>
         <div className='new-expense__actions'>
            <button>Add Expense</button>

         </div>
       </form>

    )
}
export default ExpenseForm