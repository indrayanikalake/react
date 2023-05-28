import React from 'react';
import './Expense.css';
import ExpenseDetails from './ExpenseDetails';
import Package from './UI/Package';


const Expense = (props) => {
  const deleteExpenseHandler = () => {
    console.log('deleted');
    const expenseElement = document.getElementById(props.id);
    if (expenseElement) {
      expenseElement.remove();
    }
  };
  
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


