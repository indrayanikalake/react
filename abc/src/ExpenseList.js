
// ExpenseList.js
import React from 'react';
import Expense from './components/Expense';

const ExpenseList = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <p>No Expenses found.</p>;
  }
  if (expenses.length === 1) {
    return (
      <div className='list'>
        <Expense
          key={expenses[0].id}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={new Date(expenses[0].date)}
          locationOfExpenditure={expenses[0].locationOfExpenditure}
        />
        <p className='p'>Only single Expense here. Please add more...</p>
      </div>
    );
  }

  return (
    <div>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
