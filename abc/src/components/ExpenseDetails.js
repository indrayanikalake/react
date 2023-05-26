import React from 'react'
import './Expense.css'
export default function ExpenseDetails(props) {
    const {expenses}=props;
  return (
    <div>
      
      {expenses && expenses.map((expense, index) => (
      <div className='expense-item' key={index}>
       
        <div className='expense-item__description'>
          <h3>{expense.title}</h3>
          <div className='expense-item__price'>${expense.expenseAmount}</div>
        </div>
      </div>
    ))}

    </div>
  )
}
