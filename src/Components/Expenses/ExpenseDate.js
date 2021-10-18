import '../assets/ExpenseDate.css'

function ExpenseDate ({date}) {

  const day = date.toLocaleString('en-US', {day : "2-digit"});
  const month = date.toLocaleString("en-US", {month : "long"});
  const year = date.getFullYear();

  return(
    <div className="expense-date">
      <div className="expense-date_day">{day}</div>
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  )
}

export default ExpenseDate;