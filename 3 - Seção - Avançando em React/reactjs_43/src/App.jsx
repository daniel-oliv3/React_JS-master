import './App.css'

// importação dos componentes
import CarDetails from './components/CarDetails';

// ------- Principal -------
function App() {
  return (
    <>
      
      <CarDetails brand="Chevrolet" km={10000} color="Preto" novo={false} />

      <CarDetails brand="Peugeot" km={900} color="Branco" novo={false} />

      <CarDetails brand="Fiat" km={2800} color="Azul" novo={false} />

      <CarDetails brand="Ford" km={0} color="Vermelho" novo={true} />

    </>
  )
}

export default App
