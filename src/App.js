import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./App.css";
//import { Button, Modal } from 'react-bootstrap';
const App = () => {
  const portfolioLinks = [
    {
      title: "JEE MAIN",
      price: "2000",
    },
    {
      title: "NEET",
      price: "2000",
    },
    {
      title: "JEE MAIN 1",
      price: "2000",
    },
    {
      title: "JEE MAIN 2",
      price: "2000",
    },
    {
      title: "NEET 1",
      price: "2000",
    },
    {
      title: "NEET 2",
      price: "2000",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Courses portfolioLinks={portfolioLinks}></Courses>
      <Footer />
    </div>
  );
};
export default App;
