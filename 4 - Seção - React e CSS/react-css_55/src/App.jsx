import './App.css'

// Importação dos components
import ComponentClassDynamic from './components/ComponentClassDynamic';



// ------- Principal -------
function App() {
  return (
    <>
      <div className="app">
        <h1>Classes dinâmicas</h1>
        <hr />
       

        <ComponentClassDynamic />
        
        
      </div>
    </>
  )
}

export default App
