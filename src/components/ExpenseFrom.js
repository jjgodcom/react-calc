import React from 'react'
import { MdSend } from "react-icons/md";

const ExpenseFrom = ({handelCharge, charge, handelAmount, amount, handleSubmit}) =>{
  

    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor='expense'>지출 항목</label>
            <input
              type='text'
              className='form-control'
              id='charge'
              name='charge'
              placeholder='예) 렌트비' 
              onChange={handelCharge}
              value={charge}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>비용</label>
            <input
              type='number'
              className='form-control'
              id='amount'
              name='amount'
              placeholder='예) 100' 
              onChange={handelAmount}
              value={amount}
            />
          </div>
        </div>
        <button type="submit" className='btn'>
          제출
          <MdSend className='btn-icon'/>
        </button>
      </form>
    )
  
}

export default ExpenseFrom