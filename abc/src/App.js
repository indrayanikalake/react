
import Expense from './components/Expense';
import ExpenseDetails from './components/ExpenseDetails';

function App(){
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 2, 28),
      locationOFExpenditure:'commercial'
    },
    {
      id: 'e2',
      title: 'Rent',
      amount: 1100,
      date: new Date(2023, 3, 15),
      locationOFExpenditure:'lolo'
    },
    {
      id: 'e3',
      title: 'Groceries',
      amount: 64.92,
      date: new Date(2023, 4, 7),
      locationOFExpenditure:'moto'
    },
  ];
 

  return(

    <div>
      
      
        <ExpenseDetails
         expenses={expenses}
      />
    </div>

      
  );
}
export default App;