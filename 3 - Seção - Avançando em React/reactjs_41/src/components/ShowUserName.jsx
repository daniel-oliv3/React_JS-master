


// ------- Component ShowUserName -------
const ShowUserName = (props) => {
  return (
    <>
        <div>
            <h1>Introdução as props</h1>
        </div>
        <hr />

        <div>
          <h2>O nome do usuário: <span>{props.nome}</span></h2>
        </div>        
    </>
  )
}

export default ShowUserName;