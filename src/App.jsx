import { useState } from 'react';
import Hero from '../src/components/Hero';
import About from './components/About';
import mpiiSedih from '../src/assets/images/mpii-sedih.png';
import mpiiSenang from '../src/assets/images/mpii-senang.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section>
        <Hero />
        <About />
      </section>
    </div>
  );
}

export default App;
