import React, { useState } from 'react';

import './Expense.css';
import ExpenseDetails from './ExpenseDetails';
import Package from './UI/Package';


const Expense = (props) => {
  //let title=props.title;
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const changeAmountHandler = () => {
    setAmount(100);
  };


 const deleteExpenseHandler=(e)=>{
 
  console.log('deleted');
    e.target.parentNode.remove();
  
  }
  const changeEpenseHandler=()=>{
    //title='updated';
    setTitle('updated');
    //console.log(title);
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
      <div>{title}</div>
      <div className='amount'>${props.amount}</div>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
      <button onClick={changeEpenseHandler}>Change Title</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
    </div>
   
    </Package>
    
  )
}

export default Expense


