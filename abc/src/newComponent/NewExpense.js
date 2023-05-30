import React from "react";
import DesignPatternWithState from "./DesignPatternWithState";

const NewExpense = (props) => {
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const submittedData={
            ...enteredExpenseData,
            id:Math.random().toString(),
           
        }
        console.log(submittedData);
        props.onAddExpense(submittedData);
    }
  return(
    <div>
        <DesignPatternWithState onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;
