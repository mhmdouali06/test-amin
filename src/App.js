import { useState, useEffect } from 'react';
import './App.css';
import Business from './components/business/Business';
import Catalogue from './components/catalogue/Catalogue';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Openpay from './components/openpay/Openpay';
import Slider from './components/slider/Slider';
import Event from './components/event/Event';
import Partners from './components/partners/Partners';
import Swift from './components/swift/Swift';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  const Loader = () => (
    <div className="centered-loader">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );

  return (
    <div className="App">
      {loading ? (
        <Loader /> 
      ) : (
        <>
          {/* <Navbar /> */}
          <Hero />
          <Business />
          <Openpay />
          <Catalogue />
          <Swift />
          <Event />
          {/* <Partners /> */}
          <Slider />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
