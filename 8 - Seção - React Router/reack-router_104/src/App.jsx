import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';


// ------- Principal -------
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App;
