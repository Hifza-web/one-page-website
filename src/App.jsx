import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Team from "./components/Team";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <div className="overflow-x-hidden w-full max-w-[100vw]">
      <Hero />
      </div>
      <Navbar />
      <div className="overflow-x-hidden w-full max-w-[100vw]">
      <Portfolio />
      <Services />
      <Team/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
</div>

    </>
  );
}

export default App;

