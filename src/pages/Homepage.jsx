import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Top from "../components/Top";

function Homepage(props) {
  return (
    <div className=" h-auto border-[1px] border-[#F0BF6C] rounded-md text-[#F9F9F9] font-['raleway'] overflow-hidden">
      <Navbar />
      <Top />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
