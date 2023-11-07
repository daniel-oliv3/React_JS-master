import { useState } from 'react';
import './App.css'

// importação dos componentes
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';



// ------- Principal -------
function App() {

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

    </>
  )
}

export default App
