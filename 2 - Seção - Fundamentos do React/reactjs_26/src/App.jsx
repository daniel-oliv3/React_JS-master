import './App.css';

// components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent'; 



// ------- Função Principal -------
function App() {
  return (
    <>
      <h1>Home</h1>

      <FirstComponent />
      
      <TemplateExpression />

      <MyComponent />
    </>
  )
}

export default App
