import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses}) => {
    return (
      <>
        <ul className='list'>
          <ExpenseItem handleDelete={handleDelete} expenses={expenses}></ExpenseItem>
        </ul>
        <button className='btn'>
          목록 지우기
          <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  
}

export default ExpenseList