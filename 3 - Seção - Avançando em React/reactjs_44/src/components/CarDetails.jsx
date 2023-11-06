

// ------- Component CarDetails -------
const CarDetails = ({ brand, km, color, novo }) => {
  return (
    <>
        <div>
            <h1>Renderização de lista em componente</h1>
        </div>
        <hr />

        <div>
          <h2>Detalhes do carro</h2>
          <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
          </ul>
          { novo && <p>Este carro é novo!</p>}
        </div>              
    </>
  )
}

export default CarDetails;





