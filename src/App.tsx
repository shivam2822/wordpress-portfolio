import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
      {/* Other sections will go here */}
    </main>
  );
}

export default App;
