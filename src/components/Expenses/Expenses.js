import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses({expenses}) {
    const [selectedYear, setSelectedYear] = useState('');

    const filterOptions = [...new Set(expenses.map(expense => expense.date.getFullYear()))].sort((a, b) => b - a);
    const filteredExpenses = expenses.filter(expense => !selectedYear || selectedYear === expense.date.getFullYear().toString());


    return (
            <Card className="expenses">
                <ExpensesFilter options={filterOptions} selectedValue={selectedYear} onSelectValue={setSelectedYear}/>
                {filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>)}
            </Card>
    );
}
