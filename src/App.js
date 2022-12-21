import './App.css'
import ExpenseList from './components/ExpenseList.js'
import ExpenseForm from './components/ExpenseForm.js'
import Alert from './components/Alert.js'

function App() {
  return (
    <>
      <Alert/>
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
