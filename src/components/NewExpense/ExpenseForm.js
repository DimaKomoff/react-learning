import {useState} from 'react';
import './ExpenseForm.css';

const DEFAULT_STATE = {
    title: '',
    amount: '',
    date: ''
}

const ExpenseForm = (props) => {
    const [formState, setFormState] = useState(DEFAULT_STATE);

    const titleChangeHandler = (event) => {
        updateState('title', event.target.value);
    }

    const amountChangeHandler = (event) => {
        updateState('amount', event.target.value);
    }

    const dateChangeHandler = (event) => {
        updateState('date', event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredFormState = {...formState, date: new Date(formState.date)}

        setFormState(DEFAULT_STATE);

        props.onSubmit(enteredFormState);
    }

    const updateState = (key, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: value
        }))
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                           value={formState.title}
                           onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={formState.amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        value={formState.date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
