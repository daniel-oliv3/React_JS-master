

const Challenge = () => {

    const num1 = 7;
    const num2 = 3;

    const handleClick = () => {
        console.log("Olá ", 3+7);
    }

    return (
        <>
            <h3>Challenge</h3>
            <p>O Resultado de {num1} + {num2} = {num1+num2}</p>
            <p>O Resultado de {num1} - {num2} = {num1-num2}</p>
            <p>O Resultado de {num1} * {num2} = {num1*num2}</p>
            <p>O Resultado de {num1} / {num2} = {num1/num2}</p>

            <hr />

            <button onClick={handleClick}>Imprimir no Console</button>
        </>
    )
}


export default Challenge;


















