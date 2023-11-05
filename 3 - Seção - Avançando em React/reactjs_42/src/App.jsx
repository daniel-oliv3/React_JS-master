import './App.css'

// importação dos componentes
import CarDetails from './components/CarDetails';

// ------- Principal -------
function App() {
  return (
    <>
      
      <CarDetails brand="Chevrolet" km={10000} color="Preto" />

    </>
  )
}

export default App
