import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const createNewExpense = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }

        props.onNewExpenseCreate(newExpense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmit={createNewExpense} />
        </div>
    );
};

export default NewExpense;
