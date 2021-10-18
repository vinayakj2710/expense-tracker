import React from "react";

import ExpenseDate from "./ExpenseDate";
import '../assets/ExpenseList.css'

const ExpenseList = (props) => {
  return (
    <ul className="expense-list">
      {props.items.length === 0 ? (
        <p>No Expenses FOUND!!! </p>
      ) : (
        props.items.map((item) => {
          return (
            <>
              <div className="expense-item" key={item.id}>
                <ExpenseDate date={item.date} />
                <div className="expense-item__description">
                  <h2 className="expense-item h2">{item.title}</h2>
                  <div className="expense-item__price">{item.cost}</div>
                </div>
                <button>Change Title</button>
              </div>
            </>
          );
        })
      )}
    </ul>
  );
};

export default ExpenseList;
