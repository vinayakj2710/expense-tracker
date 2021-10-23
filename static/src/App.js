import React, {useState} from 'react'
import './index.css'
import ExpenseItem from './Components/Expenses/ExpenseItem';
import NewExpense from './Components/NewExpenses/NewExpense';
import { ExpenseItemData } from "./Components/Expenses/ExpenseItemData";

const App = () => {

  
  const [expenses, setExpenses] = useState(ExpenseItemData);

  const addExpenseHandler= (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    })
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItem data={expenses} key={expenses.id}/>      
    </div>
  )
}

export default App;
