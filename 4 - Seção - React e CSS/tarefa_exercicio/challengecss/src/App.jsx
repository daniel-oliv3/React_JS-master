import './App.css'

// Importação dos components
import CarsDetails from './components/CarsDetails';



// ------- Principal -------
function App() {

  const cars = [
    { id: 1, marca: 'Chevrolet', cor: 'Grafite', ano: 2023, estado: true },
    { id: 2, marca: 'Honda', cor: 'Vermelho', ano: 2018, estado: false },
    { id: 3, marca: 'Ford', cor: 'Azul', ano: 2020, estado: false },
    { id: 4, marca: 'Toyota', cor: 'Preto', ano: 2023, estado: true },
    { id: 5, marca: 'Nissan', cor: 'Branco', ano: 2019, estado: false },
    { id: 6, marca: 'Mazda', cor: 'Verde', ano: 2022, estado: true },      
  ];


  return (
    <>
      <div className="app">
        <h1 className='title-app'>Lista de Carro</h1>
       
      <div className="loop">
        {cars.map((car) => (
            <CarsDetails
                key={car.id} 
                marca={car.marca}
                cor={car.cor}
                ano={car.ano}
                estado={car.estado}
            />
        ))}
        </div>
        
        
      </div>
    </>
  )
}

export default App
