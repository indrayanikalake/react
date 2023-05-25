
import Expense from './components/Expense';

function App(){
  const locationOFExpenditure='commercial';
 

  return(

    <div>
      
        <Expense locationOFExpenditure={locationOFExpenditure}/>
    
    </div>

      
  );
}
export default App;