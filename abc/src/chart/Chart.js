import React from 'react'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointvalues=dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax=Math.max(...dataPointvalues);

  return (
    <div className='chart'>
      {props.dataPoints.map((datapoint)=>(
        <ChartBar
          key={datapoint.labek}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
         />
      ))}
    </div>
  )
}

export default Chart
