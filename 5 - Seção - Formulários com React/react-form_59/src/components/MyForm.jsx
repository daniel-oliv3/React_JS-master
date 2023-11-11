import './MyForm.css';

// ------- Component -------
const MyForm = () => {
  return (
    <>
        <div className="container-title">
            <h1>Criando formulários</h1>
            <p>Meu formulário</p>
            <hr />
        </div>
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" placeholder="Digite o seu nome" />
            </div>
                <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

export default MyForm;