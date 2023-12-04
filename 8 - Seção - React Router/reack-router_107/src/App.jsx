import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


// ------- Principal -------
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search params */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* 6 - nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search params */}
          <Route path='/search' element={<Search />} />
          {/* 7 - no maatch route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App;
