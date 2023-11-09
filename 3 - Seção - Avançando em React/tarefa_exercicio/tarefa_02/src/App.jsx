import './App.css'

// importação dos componentes
import UserDetails from './components/UserDetails'


// ------- Função principal -------
function App() {

  const pessoas = [
    { id: 1, nome: 'João', idade: 25, profissao: 'Programador' },
    { id: 2, nome: 'Maria', idade: 30, profissao: 'Professora' },
    { id: 3, nome: 'Priscila', idade: 16, profissao: 'Estudante' },
    { id: 4, nome: 'Pedro', idade: 35, profissao: 'Engenheiro' },
    { id: 5, nome: 'Ana', idade: 40, profissao: 'Design' },
    { id: 6, nome: 'Bia', idade: 16, profissao: 'Estudante' },        
];


  return (
    <>
      <h1>Tarefa: Desafio sobre componentes e recursos do React</h1>
      <p>Este desafio tem como objetivo reforçar os aprendizados nesta seção</p>
      <hr />

      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id} 
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </>
  )
}

export default App
