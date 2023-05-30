import  { useState } from 'react';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    setTitle('');
    setAmount('');
    setDate('');

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">Expense Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
