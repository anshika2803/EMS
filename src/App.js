import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./App.css";
import { render } from "@testing-library/react";
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
      <Header />
      <Hero />
      <WhyChooseUs />
      <Courses portfolioLinks={portfolioLinks}></Courses>
      <Footer />
    </div>
  );
 }

export default App;
