

// ------- Component ChangeMessageState -------
const ChangeMessageState = ({ handleMessage }) => {

  const messages = ["Oi", "Olá", "Oi, Tudo bem ?", "Hello World!"]

  return (
    <>
        <div>
            <h1>Change Message State</h1>
        </div>
        <hr />
        <div>
          <button onClick={() => handleMessage(messages[0])}>1</button>
          <button onClick={() => handleMessage(messages[1])}>2</button>
          <button onClick={() => handleMessage(messages[2])}>3</button>
          <button onClick={() => handleMessage(messages[3])}>4</button>
        </div>
    </>
  )
}

export default ChangeMessageState;





