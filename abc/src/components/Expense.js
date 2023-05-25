
import './Expense.css';
import React from 'react';

export default function Expense(props) {
    const expenseDate=new Date(2023,2,28);
    const expenseTitle='Car Insurance';
    const expenseAmount=249;
  return (

    <div>

      <div className='expense-item' >
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
          <h3>{expenseTitle}</h3>
          <div className='expense-item__price'>${expenseAmount}</div>
          <div>{props.locationOfExpenditure}</div>
        </div>
      </div>
   
  </div>
  )
}

