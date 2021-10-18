import React, { useState } from "react";
import "../assets/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [dispInput, setDispInput] = useState(true);

  const handleDispInput = () => {
    setDispInput(!dispInput);
  };

  const savedDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {dispInput && (
        <button onClick={handleDispInput}> Add New Expense </button>
      )}
      {!dispInput && (
        <ExpenseForm savedData={savedDataHandler} cancel={handleDispInput} />
      )}
    </div>
  );
};

export default NewExpense;
