import "./GameOver.css";

// ------- Component -------
const GameOver = ({ retry, score }) => {
  return (
    <>
        <div>
          <h1>Fim de Jogo!</h1>
          <p>A sua pontuação foi: <span>{score}</span></p>
          <button onClick={retry}>Resetar jogo</button>
        </div>
    </>
  )
}

export default GameOver;