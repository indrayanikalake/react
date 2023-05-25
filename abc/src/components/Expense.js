
import './Expense.css';
import React from 'react';

export default function Expense() {
    const expenseDate=new Date(2023,2,28);
    const expenseTitle='Car Insurance';
    const expenseAmount=249;
    const locationOfExpenditure = 'Auto Insurance Company';
  return (
    <div className='expense-item'>
     <div>{expenseDate.toISOString()}</div>
     <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
        <div>{locationOfExpenditure}</div>
     </div>
    </div>
  )
}

