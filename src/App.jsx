import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedLanding from './components/AnimatedLanding';
import AnimatedCursor from './components/AnimatedCursor';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Companies from './pages/Companies';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleLandingComplete = () => {
    setShowLanding(false);
  };

  return (
    <Router>
      <div className="App">
        <AnimatedCursor />
        {showLanding ? (
          <AnimatedLanding onComplete={handleLandingComplete} />
        ) : (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
