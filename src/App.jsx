import React from "react";
import { Link } from "react-scroll";
import "./App.css";
import Navbar from "./Components/Navbar";
import Heropage from "./Components/Heropage";
import AboutUs from "./Components/AboutUs";
import WhyChooseUs from "./Components/WhyChooseUs";
import Services from "./Components/Services";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="snap-container">
        <Heropage />
        <AboutUs />
        <WhyChooseUs />
        <Services />
        <Technologies />
        <Projects />
        <Team/>
        <Contact/>
        <Footer />
      </div>
    </>
  );
};

export default App;
