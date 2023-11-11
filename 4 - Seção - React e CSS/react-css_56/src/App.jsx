import './App.css'

// Importação dos components
import Title from './components/Title';



// ------- Principal -------
function App() {
  return (
    <>
      <div className="app">
        <h1>CSS Modules</h1>
        <hr />
       

        <Title />
        
        <p className="my_title">Teste de escopo do css module (App.js)</p>
        
      </div>
    </>
  )
}

export default App
