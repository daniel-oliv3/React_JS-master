import './App.css'

// Importação dos components
import MyComponent from './components/MyComponent';


// ------- Principal -------
function App() {
  return (
    <>
      <div className="app">
        <h1>CSS de componentes</h1>
        <hr />


        <MyComponent />

        <p>Este parágrafo e do App.js</p>
      </div>
    </>
  )
}

export default App
