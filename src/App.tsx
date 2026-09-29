import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
