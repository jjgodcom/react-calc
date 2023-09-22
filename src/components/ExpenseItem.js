import React from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ExpenseItem({handleDelete, expenses, handelEdit}) {

  return (
    <>
      {expenses.map((expense, key) => (
        <li className='item' key={key}>
          <div className='info'>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'>{expense.amount}</span>
          </div>
          <div>
            <button className='edit-btn'
              onClick={() => handelEdit(expense.id)}
            >
              <MdEdit />
            </button>
            <button
              className='clear-btn'
              onClick={() => handleDelete(expense.id)}
            >
              <MdDelete />
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

export default ExpenseItem;
