import React from 'react';
import './Expense.css';
import ExpenseDetails from './ExpenseDetails';
import Package from './UI/Package';


const Expense = (props) => {
  return (
    
        <div className='main'>
    <div className='expense-details'>
      <ExpenseDetails date={props.date} location={props.locationOfExpenditure} />
      <div>{props.title}</div>
      <div className='amount'>${props.amount}</div>
     
    </div>
    </div>
    
  )
}

export default Expense


