import { useState } from "react";



// ------- Component ConditionalRender -------
const ConditionalRender = () => {

  const [name, setName] = useState('Sapup3');
    // const [name] = useState('Daniel');
    // const [name] = useState('Priscila');

  return (
    <>
        <div>
            <h1>If e else no JSX</h1>
        </div>

        <hr />


        <div>
            <h2>If Ternário</h2>

            {name === "Daniel" ? (
              <div>
                <p>O nome é Daniel</p>
              </div>
            ) : (
              <div>
                <p>Nome não encontrado!</p>
              </div>
            )}
            <button onClick={() => setName("Daniel")}>Clique Aqui</button>
        </div>
        
    </>
  )
}

export default ConditionalRender;