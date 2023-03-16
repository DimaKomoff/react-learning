import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({options, selectedValue, onSelectValue}) => {
    const selectValue = (event) => {
        onSelectValue(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selectedValue} onChange={selectValue}>
                    <option value="">All</option>
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
