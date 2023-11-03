import { useState } from 'react';
import './App.css'

// importação dos componentes
import ShowUserName from './components/ShowUserName';

// ------- Principal -------
function App() {

  const name = "Sapup3";
  const [userNome] = useState("Priscila");

  return (
    <>
      
      <ShowUserName nome="Daniel" />

      <ShowUserName nome={name} />

      <ShowUserName nome={userNome} />
    </>
  )
}

export default App
