
import './Expense.css';
import React from 'react';

export default function Expense(props) {
    const {expenses}=props;
    
  return (

    <div>
      
    {expenses && expenses.map((expense, index) => (
    <div className='expense-item' key={index}>
      <div>
      <div>{expense.date.toLocalString('en-US',{month : 'long'})}</div>
      <div>{expense.date.toLocalString('en-US',{day : '2-digit'})}</div>
      <div>{expense.date.getFullYear()}</div>
      </div>
      <div className='expense-item__description'>
        <h3>{expense.title}</h3>
        <div className='expense-item__price'>${expense.expenseAmount}</div>
        <div>{expense.locationOfExpenditure}</div>
      </div>
    </div>
  ))}

  </div>
     

  )
}

