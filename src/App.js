import ExpenseFrom from "./components/ExpenseFrom";
import ExpenseList from "./components/ExpenseList";
import './assets/scss/style.scss'
import { useState } from "react";
import { initialExpenses } from '../src/constants/index';

const App = () => {

  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState(""); // 지출목록 이름 저장하기위해
  const [amount, setamount] = useState(0); // 금액 저장하기위해

  const handelCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handelAmount = (e) => {
    console.log(e.target.valueAsNumber); //number값 전달받아야 하니 valueAsNumber사용
    setamount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작을 막는 이벤트
    // crypto.randomUUID() : 랜덤한 고유 아이디 생성함
    // charge가 빈값이 아니거나 amount가 0보다 클경우 실행
    if(charge !== "" && amount > 0) {
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      // 불변성을 지켜주기 위해서 새로운 expenses를 생성
      const newExpenses = [...expenses, newExpense];
      console.log(newExpenses);
      setExpenses(newExpenses);
      setCharge("");
      setamount(0);
    } else {
      console.log("error")
    }
  }

    return(
      <main className="main-container">
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
          <ExpenseList></ExpenseList>
        </div>
        <div className="ExpensEnd">
          <p>총지출:<span>원</span></p>
        </div>
      </main>
    )
  
}

export default App;