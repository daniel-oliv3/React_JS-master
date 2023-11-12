import { useState } from 'react';
import './MyForm.css';

// ------- Component -------
const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [nome, setNome] = useState(user ? user.nome : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState("");

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
    console.log(bio);

    // validação
    // envio

    // 7 - limpar form
    setNome('');
    setEmail('');
    setBio('');
  };

  return (
    <>
        <div className="container-title">
            <h1>Textarea no React</h1>
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
            <div>
              <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do Usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
              </label>
            </div>
                <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

export default MyForm;