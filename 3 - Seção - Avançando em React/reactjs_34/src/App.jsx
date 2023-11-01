import { useState } from 'react' //importação do useState

import './App.css'


// ------- Principal -------
function App() {
  // useState
  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>O que são hooks?</h1>

      <p>useState: {contador}</p>

      {/*Botão que dispara o evento de contador*/}    
      <button onClick={() => setContador((contador) => contador + 1)}>
        O Contador é: {contador}
      </button>
     
    </>
  )
}

export default App
