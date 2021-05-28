import ExpenseForm from './ExpenseForm'
import './ExpenseForm.css';

const NewExpense = (props) => {
    const saveExpenseFormHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(newExpenseData)
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
    </div>
};

export default NewExpense;