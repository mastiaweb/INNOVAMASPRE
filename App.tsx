import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cycles from './pages/Cycles';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Resources from './pages/Resources';
import FloatingContact from './components/FloatingContact';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ciclos" element={<Cycles />} />
            <Route path="/sedes" element={<Locations />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            {/* Fallback for demo purposes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
};

export default App;