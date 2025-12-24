import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Goals from './components/Goals';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <div className="grain-overlay"></div>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Goals />
      <Footer />
    </div>
  );
}

export default App;
