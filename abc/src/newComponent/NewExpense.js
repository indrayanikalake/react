import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
    const [expenses, setExpenses] = useState([]);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
  
    const addExpenseHandler = (expenseData) => {
      setExpenses((prevExpenses) => {
        return [...prevExpenses, expenseData];
      });
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
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          enteredTitle={enteredTitle}
          enteredAmount={enteredAmount}
          enteredDate={enteredDate}
          onTitleChange={titleChangeHandler}
          onAmountChange={amountChangeHandler}
          onDateChange={dateChangeHandler}
        />
        {/* Render the expenses here */}
      </div>
    );
}

export default NewExpense;


