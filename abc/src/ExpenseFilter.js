import React from "react";
const ExpeseFilter = () => {
  const dropDownChangeHandler=(event)=>{
    props.onChangeFilter(event.target.value);
  }
  return(
    <div>
        <div>
            <label>Filter by Year</label>
            <select value={props.slected} onChange={dropDownChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2023'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
  )
}

export default ExpeseFilter;
