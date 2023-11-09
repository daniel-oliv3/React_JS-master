import './App.css'

// importação dos componentes
import ExecuteFunction from './components/ExecuteFunction';

// ------- Principal -------
function App() {

  //função
  function showMessage() {
    console.log("Hello World!");
  }

  return (
    <>
      
      <ExecuteFunction myFunction={showMessage} />


    </>
  )
}

export default App
