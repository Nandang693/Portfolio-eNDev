import { useState } from 'react';
import Hero from '../src/components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
