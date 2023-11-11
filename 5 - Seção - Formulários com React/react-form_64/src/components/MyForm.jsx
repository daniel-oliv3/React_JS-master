import { useState } from 'react';
import './MyForm.css';

// ------- Component -------
const MyForm = ({ user }) => {
  // 6 - Controlled inputs


  // 3 - Gerenciamento de dados
  const [nome, setNome] = useState(user ? user.nome : '');
  const [email, setEmail] = useState(user ? user.email : '');

  // função que altera o valor do nome
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
                  <input type="text" id="nome" placeholder="Digite o seu nome" onChange={handleNome} value={nome} />
                </label>
                
                <label>
                  <span>Email</span>
                  <input type="email" id="email" placeholder="Digite o seu Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
            </div>
                <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

export default MyForm;