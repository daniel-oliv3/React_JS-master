import './App.css';

// Importação dos componentes
import MyForm from './components/MyForm';


// ------- Principal -------
function App() {
  return (
    <>
      <MyForm user={{ nome: "Daniel Oliveira", email: "daniel.oliv@gmail.com" }} />

      
    </>
  )
}

export default App;
