
import Expense from './components/Expense';

function App(){
 // const locationOFExpenditure='commercial';
 const expenses = [
  {
    expenseDate: new Date(2023, 2, 28),
    expenseTitle: 'Car Insurance',
    expenseAmount: 249,
    locationOfExpenditure: 'Auto Insurance Company'
  },
  {
    expenseDate: new Date(2023, 3, 15),
    expenseTitle: 'Groceries',
    expenseAmount: 50,
    locationOfExpenditure: 'Local Supermarket'
  },
  // Add more expenses here
];

  return(

    <div>
      
        <Expense expenses={expenses}/>
    
    </div>

      
  );
}
export default App;