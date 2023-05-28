import React, { useState } from 'react';

import './Expense.css';
import ExpenseDetails from './ExpenseDetails';
import Package from './UI/Package';


const Expense = (props) => {
 const deleteExpenseHandler=(e)=>{
    e.target.parentNode.remove();
  
  }

  //react code
 /* const [isDeleted, setIsDeleted] = useState(false);

  const deleteExpenseHandler = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null; // Render null if the expense is deleted
  } */

  return (
    <Package className='card'>
   
    <div className='expense-details'>
      <ExpenseDetails date={props.date} location={props.locationOfExpenditure} />
      <div>{props.title}</div>
      <div className='amount'>${props.amount}</div>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </div>
   
    </Package>
    
  )
}

export default Expense


