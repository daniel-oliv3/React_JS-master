

// ------- Component ExecuteFunction -------
const ExecuteFunction = ({ myFunction }) => {
  return (
    <>
        <div>
            <h1>Função como prop</h1>
        </div>
        <hr />
        <div>
          <button onClick={myFunction}>Executar Função</button>
        </div>
    </>
  )
}

export default ExecuteFunction;





