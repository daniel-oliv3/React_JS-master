

// ------- Component CarDetails -------
const CarDetails = ({ brand, km, color, novo }) => {
  return (
    <>
        <div>
            <h1>Reaproveitamento de componentes</h1>
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





// Exemplo 1
// // ------- Component CarDetails -------
// const CarDetails = (props) => {
//   return (
//     <>
//         <div>
//             <h1>Destructuring em props</h1>
//         </div>
//         <hr />

//         <div>
//           <h2>Detalhes do carro</h2>
//           <ul>
//             <li>Marca: {props.brand}</li>
//             <li>KM: {props.km}</li>
//             <li>Cor: {props.color}</li>
//           </ul>
//         </div>              
//     </>
//   )
// }

// export default CarDetails;