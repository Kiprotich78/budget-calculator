import React, {useState} from 'react'
import './App.css'
import ExpenseList from './components/ExpenseList.js'
import ExpenseForm from './components/ExpenseForm.js'
import Alert from './components/Alert.js'
import { v4 as uuid } from 'uuid';
import { setSelectionRange } from '@testing-library/user-event/dist/utils'

const initailExpenses = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'Credit Card Payment', amount: 1200 }
  
]

function App() {
  const [Expenses, setExpenses] = useState(initailExpenses);

  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState('');

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      setExpenses([...Expenses, { id: uuid(), charge, amount }]);
      setCharge('');
      setAmount('');
    }
    
  }

  return (
    <>
      
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm amount={amount} charge={charge} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} />
        <ExpenseList expenses={Expenses} />
      </main>
      <h1>
        total spending : <span className='total'>
          ${Expenses.reduce((acc, curr) => {
            return acc += parseInt(curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
