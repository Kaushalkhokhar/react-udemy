import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const saveExpenseFormHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
    setIsEditing(false)
  };

  const [isEditing, setIsEditing] = useState(false)

  const clickHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
      setIsEditing(false);
  }

  return (
    <div className="new-expense">
    {/* && used for abusing second element with condition matched */}
      {!isEditing && <button onClick={clickHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm cancel={cancelHandler} onSaveExpenseForm={saveExpenseFormHandler} />}
    </div>
  );
};

export default NewExpense;
