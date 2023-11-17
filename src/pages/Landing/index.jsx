import React from "react";
//Layout
import Header from "../../Layout/Header/Header";
//Sections
import Home from "../../sections/Home/Home";
import About from "../../sections/About/About";
import ServicesSection from "../../sections/Services/ServicesSection";
import Team from "../../sections/Team/Team";
import Footer from "../../Layout/Footer/Footer";
import ContactSection from "../../sections/Contact/ContentSection";



const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <ServicesSection/>
        <Team/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  );
};

export default Landing;
