import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { initialExpenses } from '../constants/index';

function ExpenseItem() {
  const [expenses, setExpenses] = useState(initialExpenses);
  //     변수이름(getter),State를 정하는 함수setter

  const handleDelete = (id) => {
    // 클릭한 id값과 배열에 있는 id값이 같을경우 제외하고 새로운 배열을 생성함
    const newExpense = expenses.filter(expense => expense.id !== id);
    console.log(newExpense);

    setExpenses(newExpense);
  }

  return (
    <>
      {expenses.map((expense, key) => (
        <li className='item' key={key}>
          <div className='info'>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'>{expense.amount}</span>
          </div>
          <div>
            <button className='edit-btn'><MdEdit /></button>
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
