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
                <label>
                  <span>Nome</span>
                  <input type="text" id="name" placeholder="Digite o seu nome" />
                </label>
                
                <label>
                  <span>Email</span>
                  <input type="email" id="email" placeholder="Digite o seu Email" />
                </label>

                <label>
                  <span>Senha</span>
                  <input type="password" id="senha" placeholder="Digite a sua senha" />
                </label>
            </div>
                <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

export default MyForm;