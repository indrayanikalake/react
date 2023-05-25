
import './Expense.css';
import React from 'react';

export default function Expense(props) {
    const { expenses } = props;
  return (

    <div>
    {expenses && expenses.map((expense, index) => (
      <div className='expense-item' key={index}>
        <div>{expense.expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
          <h3>{expense.expenseTitle}</h3>
          <div className='expense-item__price'>${expense.expenseAmount}</div>
          <div>{expense.locationOfExpenditure}</div>
        </div>
      </div>
    ))}
  </div>
  )
}

