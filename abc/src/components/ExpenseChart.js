import React from 'react'
import Chart from '../chart/Chart'

const ExpenseChart = (props) => {
    const chartDataPoints=[
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'march',value:0},
        {label:'april',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'july',value:0},
        {label:'aug',value:0},
        {label:'sept',value:0},
        {label:'oct',value:0},
        {label:'nov',value:0},
        {label:'dec',value:0}
    ];
    for(const expense of props.expenses){
        const expenseMonth=props.date.getMonth();
        chartDataPoints[expenseMonth].value+=expense.amount;
    }
  return (
    <div>
      <Chart dataPoints={chartDataPoints}/>
    </div>
  )
}

export default ExpenseChart
