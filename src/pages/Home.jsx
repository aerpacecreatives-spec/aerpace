import React from "react";
import Jason from "../sections/Jason";
import SecondVideo from "../sections/SecondVideo";
import Lucia from "../sections/Lucia";
// import PostCard from "../sections/PostCard";
// import Final from "../sections/Final";
// import Outro from "../sections/Outro";
import Hero from "../sections/Hero";
import FirstVideo from "../sections/FirstVideo";
import NavBar from "../Component/Navbar";
import ThirdVIdeo from "../sections/ThirdVIdeo";
import NextLucia from "../sections/NextLucia";
import FourthVideo from "../sections/FourthVideo";
import AerCarsection from "../sections/AerCarsection";
import FifthVideo from "../sections/FifthVideo";
import AerVoltsection from "../sections/AerVoltsection";
import SixthVideo from "../sections/SixthVideo";
import AerShieldsection from "../sections/AerShieldsection";

const Home = () => {
  return (
    <div>
      {/* <NavBar />   */}
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <ThirdVIdeo />
     <NextLucia/>
     <FourthVideo/>
     <AerCarsection/>
     <FifthVideo/>
     <AerVoltsection/>
     <SixthVideo/>
     <AerShieldsection/>
    </div>
  );
};

export default Home;
