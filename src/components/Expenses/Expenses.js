import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export default function Expenses({expenses}) {
    return (
        <Card className="expenses">
            {expenses.map((expence, index) => <ExpenseItem key={index} title={expence.title} date={expence.date} amount={expence.amount}/>)}
        </Card>
    );
}
