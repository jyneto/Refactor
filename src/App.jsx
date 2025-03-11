import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    // <>
    // <Navbar fixed="top" />
    //   <main>
    //     <section id="home"><Home /></section>
    //     <section id="experience"><Experience /></section>
    //     <section id="skills"><Skills /></section>
    //     <section id="about"><AboutMe /></section>
    //     <section id="projects"><Projects /></section>
    //     <section id="contact"><Contact /></section>

    //   </main>

    //   <Footer />

    // </>

    <Router>
      <Navbar />
      <main className="main-content">
        <Routes basename="/Refactor">
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
