import './App.css';
import Home from './pages/Home';

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// ------- Principal -------
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App;
