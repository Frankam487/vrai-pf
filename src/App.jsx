import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualif from "./components/qualifications/Qualif";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonial from "./components/testimonial/Testimonial";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";
import Commits from "./components/commits/Commits";

const App = () => {
  return (
    <div>
      <Header />
      
      <main className="main ">
        <Home />
        <Commits/>
        <About />
        <Skills />
        <Project />
        <Services />
        <Qualif />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <Scroll/>
    </div>
  );
};

export default App;
