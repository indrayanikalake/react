import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = () => {
    const [expenses, setExpenses] = useState([]);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const addExpenseHandler = (expenseData) => {
      setExpenses((prevExpenses) => {
        return [...prevExpenses, expenseData];
      });
      setShowForm(false);
    };

    const showFormHandler = () => {
        setShowForm(true);
      };
    
      const hideFormHandler = () => {
        setShowForm(false);
      };

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };

    return (
      <div>
        <h1>Expense Tracker</h1>
        {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
        {showForm && (
        <ExpenseForm
          onAddExpense={(expenseData) => {
            addExpenseHandler(expenseData);
            hideFormHandler();
          }}
         
          enteredTitle={enteredTitle}
          enteredAmount={enteredAmount}
          enteredDate={enteredDate}
          onTitleChange={titleChangeHandler}
          onAmountChange={amountChangeHandler}
          onDateChange={dateChangeHandler}
        />
        )}
        {/* Render the expenses here */}
      </div>
    );
}

export default NewExpense;