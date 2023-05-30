import  {useState} from "react";
const DesignPatternWithState = () => {
  const [userInput, setUserInput]=useState({
    title:'',
    amount:'',
    date:''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const titleChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return {...prevState,title:event.target.value};
        
    })
  }
  const amountChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return {...prevState,amount:event.target.value};
    })
  }
  const dateChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return {...prevState,date:event.target.value};
    })
  }
 
  const submitHandler = (event) => {
    event.preventDefault();

    const submittedData = {
      title: userInput.title,
      amount: userInput.amount,
      date: userInput.date
    };

    setSubmittedData(submittedData);
    setUserInput({
      title: '',
      amount: '',
      date: ''
    });
  };

  return(
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            id="title"
            value={userInput.title}
            onChange={titleChangeHandler}/>

        </div>
        <div>
        <label htmlFor="amount">Amount</label>
            <input
            type="number"
            id="amount"
            value={userInput.amount}
            onChange={amountChangeHandler}/>

        </div>
        <div>
        <label htmlFor="date">Date</label>
            <input
            type="date"
            id="date"
            value={userInput.date}
            onChange={dateChangeHandler}/>
        </div>
        <button type="submit" >Submit</button>
      {/* Display the entered details */}
     {submittedData && (
     <div>
        <p>Entered Title: {submittedData.title}</p>
        <p>Entered Amount: {submittedData.amount}</p>
        <p>Entered Date: {submittedData.date}</p>
      </div>
      )}
    
    </form>
  )
}

export default DesignPatternWithState;