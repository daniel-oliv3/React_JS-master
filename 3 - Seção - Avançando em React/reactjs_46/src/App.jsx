import './App.css'

// importação dos componentes
import Container from './components/Container';

// ------- Principal -------
function App() {
  return (
    <>
      
      <Container myValue="Teste..." >
        <p>Este e um paragrafo, component filho</p>
      </Container>


      <Container myValue="Sapup3 na Área!" >
        <p>Testando o container</p>
      </Container>

    </>
  )
}

export default App
