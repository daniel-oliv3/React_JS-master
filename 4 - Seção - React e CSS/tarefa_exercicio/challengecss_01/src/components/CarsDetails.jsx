import styles from './CarsDetails.module.css';


// ------- Component -------
const CarsDetails = ({ marca, cor, ano, estado }) => {
  return (
    <>
        <div className={styles.container1}>
            <h1>Tarefa: Desafio sobre React com CSS</h1>
            <p className={styles.paragrafo1}>Neste desafio você vai treinar os conceitos de CSS aplicados em projetos com React</p>
            <hr />
        </div>

        <div className={styles.container2}>
            <ul>
                <li>Marca: {marca}</li>
                <li>Cor: {cor}</li>
                <li>Ano: {ano}</li>
                <p>{estado === true ? <li>Carro Novo</li> : null}</p>
                <p>{estado === false ? <li>Carro Velho</li> : null}</p>
            </ul>      
        </div>
   
    
    </>
  )
}

export default CarsDetails;