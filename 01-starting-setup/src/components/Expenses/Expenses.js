import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setSelectedFilter(selectedYear)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={selectedFilter} onFilterChange={filterChangeHandler} />
                {props.items.map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)}
            </Card>
        </div>

    )
}

export default Expenses;