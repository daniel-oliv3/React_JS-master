import { useState } from 'react' //importação do useState

import './App.css'

// importação dos componentes
import ManageData from './components/ManageData'

// ------- Principal -------
function App() {
  return (
    <>
      <h1>useState</h1>

      <ManageData />
     
    </>
  )
}

export default App
