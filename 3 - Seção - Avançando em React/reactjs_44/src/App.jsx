import './App.css'

// importação dos componentes
import CarDetails from './components/CarDetails';

// ------- Principal -------
function App() {

  const cars = [
    {id: 1, brand: "Ferrari", km: 0, color: "Vermelha", novo: true},
    {id: 2, brand: "Audi", km: 1000, color: "Cinza", novo: false},
    {id: 3, brand: "Maclaren", km: 0, color: "Laranja", novo: true},
    {id: 4, brand: "Chevrolet", km: 10, color: "Grafite", novo: false},
  ];

  return (
    <>
      
      {/*Loop em array de objetos, com key*/}
      {/* {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          novo={car.novo}
        />
      ))} */}


      {/*Loop em array de objetos, sem key*/}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          novo={car.novo}
        />
      ))}


    </>
  )
}

export default App
