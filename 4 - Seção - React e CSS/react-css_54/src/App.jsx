import './App.css'

// Importação dos components
import ComponentCssInline from './components/ComponentCssInline';



// ------- Principal -------
function App() {
  return (
    <>
      <div className="app">
        <h1>CSS inline dinâmico</h1>
        <hr />
       

        <ComponentCssInline />
        
      </div>
    </>
  )
}

export default App
