import { useState } from 'react';
import './MyForm.css';

// ------- Component -------
const MyForm = () => {
  // 3 - Gerenciamento de dados
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  // const [senha, setSenha] = useState();

  // funções
  const handleNome = (e) => {
    setNome(e.target.value);
  };

  console.log(nome);
  console.log(email);

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