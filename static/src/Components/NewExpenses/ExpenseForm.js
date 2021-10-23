import React, { useState } from "react";
import "../assets/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const inputSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData1 = {
      title: enteredTitle,
      cost: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.savedData(expenseData1);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={inputSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            name="title"
            value={enteredTitle} 
            required="required"
            onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min=".01"
            step=".01"
            value={enteredAmount} 
            required="required"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2018-01-01"
            max="2021-12-31"
            value={enteredDate} 
            required="required"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.cancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
// const [userInput, setUserInput] = useState({
//     enteredTitle:"",
//     enteredAmount:"",
//     enteredDate:""
// });

// const inputChangeHandler = (event) => {
//     event.preventDefault();
//     const inputField = event.target.getAttribute('name');
//     const inputValue = event.target.value;

//     const newTitle = {...userInput};
//     newTitle [inputField]= inputValue;

//     setUserInput(newTitle);
//     console.log(newTitle);
// }
