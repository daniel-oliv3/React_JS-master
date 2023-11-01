import { useState } from "react";

const ManageData = () => {
    // const someDate = 10;
    let someDate = 10;

    console.log(someDate)

    const [number, setNumber] = useState(0);

    console.log(number)
  return (
    <>
        <div>
            <h1>ManageData</h1>
            <p>Valor: <strong>{someDate}</strong></p>

            <button onClick={() => (someDate = 15)}>Mudar Variável</button>
        </div>

        <hr />

        <div>
            <p>Valor Number: <strong>{number}</strong></p>

            <button onClick={() => setNumber(25)}>Mudar o State</button>
        </div>
    </>

    
  );
};

export default ManageData;