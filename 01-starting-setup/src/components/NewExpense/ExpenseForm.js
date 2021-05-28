import React, { useState } from 'react';
import './NewExpense.css';

const ExpenseForm = (props) => {
    // First Approch
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Second approch. however first is preferable
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // more safer than above method
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();// To abort default settings like loading page again 

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseForm(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }

    // const cancelClickHandler = () => {
    //     props.cancel();
    // } 
    // insted use direct ro click button

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                ></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                ></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"
                    min="2019-01-01"
                    max="2020-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                ></input>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="button" onClick={props.cancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;