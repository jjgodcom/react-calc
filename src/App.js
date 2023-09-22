import ExpenseFrom from "./components/ExpenseFrom";
import ExpenseList from "./components/ExpenseList";
import './assets/scss/style.scss'
import { useState } from "react";
import { initialExpenses } from '../src/constants/index';
import Alert from "./components/Alert";

const App = () => {

  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState(""); // 지출목록 이름 저장하기위해
  const [amount, setamount] = useState(0); // 금액 저장하기위해

  const [alert, setAlert] = useState({ show: false});

  const handelCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handelAmount = (e) => {
    console.log(e.target.valueAsNumber); //number값 전달받아야 하니 valueAsNumber사용
    setamount(e.target.valueAsNumber);
  }

  const handelAlert = ({type, text}) => {
    setAlert({show : true, type, text});
    setTimeout(() => {
      setAlert({show : false});
    }, 7000);
  }

  const handleDelete = (id) => {
    // 클릭한 id값과 배열에 있는 id값이 같을경우 제외하고 새로운 배열을 생성함
    const newExpense = expenses.filter(expense => expense.id !== id);
    console.log(newExpense);

    setExpenses(newExpense);
    handelAlert({type:"danger",text:"아이템이 삭제되었습니다."});
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작을 막는 이벤트
    // crypto.randomUUID() : 랜덤한 고유 아이디 생성함
    // charge가 빈값이 아니거나 amount가 0보다 클경우 실행
    if(charge !== "" && amount > 0) {
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      // 불변성을 지켜주기 위해서 새로운 expenses를 생성  
      const newExpenses = [...expenses, newExpense];
      // console.log(newExpenses);
      setExpenses(newExpenses);
      setCharge(""); //값초기화
      setamount(0); //값초기화
      // 값이 성공적으로 될경우에는 handelAlert 의 값을 긍정으로 수정
      handelAlert({type:"success",text:"아이템이 생성되었습니다."});
    } else {
      console.log("error");
      // 에러가 있을경우 부정적으로 출력
      handelAlert({type:"danger",text:"charge는 빈값일수 없으며 amount는 0보다 커야 합니다."});
    }
  }

    return(
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text}></Alert> : null}
        <h1>예산 계산기</h1>
        <div>
          {/* Expens From */}
          <ExpenseFrom 
            handelCharge={handelCharge}
            handelAmount={handelAmount}
            charge={charge}
            amount={amount}
            handleSubmit={handleSubmit}>
          </ExpenseFrom>
        </div>
        <div>
          {/* Expens List */}
          <ExpenseList handleDelete={handleDelete} handelAlert={handelAlert} expenses={expenses}></ExpenseList>
        </div>
        <div className="ExpensEnd">
          <p>총지출:<span>원</span></p>
        </div>
      </main>
    )
  
}

export default App;