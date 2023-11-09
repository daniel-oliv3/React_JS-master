

// ------- Component UserDetails -------
const UserDetails = ({ nome, idade, profissao }) => {

  return (
    <>
        <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
                <p>{idade < 18 ? <li>Menor de idade</li> : null}</p>
                <p>{idade >= 18 ? <li>Maior de idade, Licença para dirigir!</li> : null}</p>
            </ul>      
        </div>
    </>
  )
}

export default UserDetails