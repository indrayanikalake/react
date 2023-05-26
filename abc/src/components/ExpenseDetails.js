
import React from 'react';
import './ExpenseDetails.css'

const ExpenseDetails=(props) =>{
   const month=props.date.toLocaleString('en-US',{month:'long'});
   const day=props.date.toLocaleString('en-US',{day:'2-digit'});
   const year=props.date.getFullYear();
  return (
    <div className='expense-items'>
        <div className='items'>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        </div>
     
      <div>{props.location}</div>
    </div>
  );
}

export default ExpenseDetails;
