
import {useState} from 'react';
import Expense from './components/Expense';
import ExpenseForm from './newComponent/ExpenseForm';
import DesignPatternWithState from './newComponent/DesignPatternWithState';
import NewExpense from './newComponent/NewExpense';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './App.css';


const dummy_expenses = [
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


const App=() =>{
  
  const [expenses,setExpenses]= useState(dummy_expenses);

  const addExpenseHandler=(expense)=>{
   setExpenses((prevExpense)=>{
    return [expense,...prevExpense];
   })
  }

  

  const [filteredYear, setFilteredYear]= useState('2020');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses=expenses.filter((expense)=>{
    const expenseYear = new Date(expense.date).toLocaleDateString('en-US', { year: 'numeric' });
    return expenseYear===filteredYear;  
  })
  console.log(filteredExpenses);
  

  return (
    <div className='app'>
      <h1>Expense Tracker</h1>
   
   <NewExpense onAddExpense={addExpenseHandler}/>
   <card>
   <ExpenseFilter  className="op" elected={filteredYear} onChangeFilter={filterChangeHandler} />
   <ExpenseList expenses={filteredExpenses} />
   </card>
  
   { expenses.map((expense) => (
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
}

export default App;
