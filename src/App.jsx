import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Reservation from './components/Reservation';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Shopping from './components/Shopping';
import { CartProvider } from './CartContext';
import Random from './components/Random'; 
import Cocktail from './components/Cocktail';
import Mocktail from './components/Mocktail';
import Champange from './components/Champange';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <br />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/random" element={<Random />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path="/mocktail" element={<Mocktail />} /> 
          <Route path="/champange" element={<Champange/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
