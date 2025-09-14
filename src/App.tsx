import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './interface/Home';
import About from './interface/About';
import Services from './interface/Services';
import Contact from './interface/Contact';
import Careers from './interface/Careers';
import Items from './interface/Items';

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-100 mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/items">Items</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
