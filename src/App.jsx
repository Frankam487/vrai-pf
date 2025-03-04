import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualif from "./components/qualifications/Qualif";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonial from "./components/testimonial/Testimonial";
import Project from "./components/project/Project";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main ">
        <Home />
        <About />
        <Skills />
        <Project />
        
        <Services />
        <Qualif />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default App;
