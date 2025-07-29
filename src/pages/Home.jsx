import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import { abouts } from "../assets/mockdata";
import AboutFeatures from "../components/Features";

function Home(props) {


  return (
    <>
      <Header />
      <Hero />
      <AboutFeatures data={abouts}/>
    </>
  );
}

export default Home;
