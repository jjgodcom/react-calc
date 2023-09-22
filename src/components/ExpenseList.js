import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses, handelEdit}) => {
    return (
      <>
        <ul className='list'>
          <ExpenseItem handleDelete={handleDelete} expenses={expenses} handelEdit={handelEdit}></ExpenseItem>
        </ul>
        <button className='btn'>
          목록 지우기
          <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  
}

export default ExpenseList