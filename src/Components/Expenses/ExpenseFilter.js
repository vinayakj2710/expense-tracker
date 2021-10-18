import React from 'react'
import '../assets/ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const filterByYear = (event) => {
        props.onFilteredYear(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select value={props.selectedYear} onChange={filterByYear}>
                    <option vlaue='2018'>2018</option>
                    <option vlaue='2019'>2019</option>
                    <option vlaue='2020'>2020</option>
                    <option vlaue='2021'>2021</option>
                </select>
            </div>
            
        </div>
    )
}

export default ExpenseFilter;
