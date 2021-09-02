import React from "react";
import Add from "../../reuseablecomp/add/Add";
import Footer from "../../reuseablecomp/footer/Footer";
import CBCarousel from "./CBCarousel/CBCarousel";
import MPGCarousel from "./MPGCarousel/MPGCarousel";
import Navbar from "../../reuseablecomp/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CBCarousel />
      {/* <Add /> */}
      <MPGCarousel />
      <Footer />
    </div>
  );
};

export default Home;
