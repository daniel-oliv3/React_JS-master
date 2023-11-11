import { useState } from 'react';
import './MyForm.css';

// ------- Component -------
const MyForm = () => {
  // 3 - Gerenciamento de dados
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  // const [senha, setSenha] = useState();

  // funçãom que altera o valor do nome
  const handleNome = (e) => {
    setNome(e.target.value);
  };

  // função de envio
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário!");
    console.log(nome);
    console.log(email);
  };

  return (
    <>
        <div className="container-title">
            <h1>Envio de form</h1>
            <p>Meu formulário</p>
            <hr />
        </div>
        {/*5 - Envio do Formulário */}

        {/*1 - Criação do Formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                  <span>Nome</span>
                  <input type="text" id="nome" placeholder="Digite o seu nome" onChange={handleNome} />
                </label>
                
                <label>
                  <span>Email</span>
                  <input type="email" id="email" placeholder="Digite o seu Email" onChange={(e) => setEmail(e.target.value)} />
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