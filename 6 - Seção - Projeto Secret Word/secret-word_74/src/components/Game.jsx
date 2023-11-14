import "./Game.css";

// ------- Component -------
const Game = ({ verifyLetter }) => {
  return (
    <>
        <div>
          <h1>Game</h1>
          <button onClick={verifyLetter}>Finalizar jogo</button>
        </div>
    </>
  )
}

export default Game;