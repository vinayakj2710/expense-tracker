import React, { useState } from "react";
import "../assets/ExpenseItem.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItem = ({data}) => {

  // const clickHaaddndler = () => {
  //   setData();
  // };

  const [filterYear, setFilterYear] = useState();

  const filteredYear = (selectYear) => {
    setFilterYear(selectYear);
  }; 

  const filteredExpense = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            selectedYear={filterYear}
            onFilteredYear={filteredYear}
          />
          <ExpensesChart expenses={filteredExpense}/>
          <ExpenseList items={filteredExpense}/> 
          
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
