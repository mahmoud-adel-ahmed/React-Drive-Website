import React from "react";
import Driver from "./components/driver/Driver";
import Find from "./components/find/Find";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Luxury from "./components/luxury/Luxury";
import Navbar from "./components/navbar/Navbar";

let App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
};

export default App;
