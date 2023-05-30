
import {useState} from 'react';
import Expense from './components/Expense';
import ExpenseForm from './newComponent/ExpenseForm';
import DesignPatternWithState from './newComponent/DesignPatternWithState';
import NewExpense from './newComponent/NewExpense';

const App=() =>{
  const expenses = [
    {
      id: 'e1',
      title: 'Insurance',
      amount: 294.67,
      date: new Date(2023, 2, 28),
      locationOfExpenditure: 'city A',
    },
    {
      id: 'e2',
      title: 'Rent',
      amount: 1100,
      date: new Date(2023, 3, 15),
      locationOfExpenditure: 'city B',
    },
    {
      id: 'e3',
      title: 'Groceries',
      amount: 64.92,
      date: new Date(2023, 4, 7),
      locationOfExpenditure: 'city C',
    },
  ];

  const [expense,setExpense]= useState([]);

  const addExpenseHandler=expense=>{
   setExpense((prevExpense)=>{
    return [...prevExpense,expense]
   })
  }

  return (
    <div >
      <h1>Expense Tracker</h1>
   <NewExpense onAddExpense={addExpenseHandler}/>
      
      { expenses.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
