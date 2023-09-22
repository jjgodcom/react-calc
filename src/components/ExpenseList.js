import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses, handelEdit, clerItem}) => {
    return (
      <>
        <ul className='list'>
          <ExpenseItem handleDelete={handleDelete} expenses={expenses} handelEdit={handelEdit}></ExpenseItem>
        </ul>
        {expenses.length > 0 && (
          <button className='btn' onClick={clerItem}>
          목록 지우기
          <MdDelete className='btn-icon'/>
        </button>
        )}
      </>
    )
  
}

export default ExpenseList