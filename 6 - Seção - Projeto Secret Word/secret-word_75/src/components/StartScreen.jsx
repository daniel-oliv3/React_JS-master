import './StartScreen.css';

// ------- Component -------
const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen;