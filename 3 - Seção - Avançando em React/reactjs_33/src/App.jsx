import './App.css'

// importação da imagem em src/img
import ImagemCity from './assets/img/city.jpg';

// ------- Principal -------
function App() {
  return (
    <>
      <h1>Avançando em React</h1>

      <div>
        <img src="../public/img/img1.jpg" alt="Paisagem" />
        <p>Imagem em public</p>
      </div>
      
      <hr />

      <div>
        <img src={ImagemCity} alt="Cidade" />
        <p>Imagem em src</p>
      </div>
    </>
  )
}

export default App
