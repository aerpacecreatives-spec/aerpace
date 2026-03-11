import React from "react";
import Jason from "../sections/Jason";
import SecondVideo from "../sections/SecondVideo";
import Lucia from "../sections/Lucia";
import PostCard from "../sections/PostCard";
import Final from "../sections/Final";
import Outro from "../sections/Outro";
import Hero from "../sections/Hero";
import FirstVideo from "../sections/FirstVideo";
import NavBar from "../Component/Navbar";
import ThirdVIdeo from "../sections/ThirdVIdeo";
import AerWingsection from "../sections/AerWingsection";
import FourthVideo from "../sections/FourthVideo";
import AerCarsection from "../sections/AerCarsection";
import FifthVideo from "../sections/FifthVideo";
import AerVoltsection from "../sections/AerVoltsection";
import SixthVideo from "../sections/SixthVideo";
import AerShieldsection from "../sections/AerShieldsection";
import SevenSection from "../sections/sevensection";
import AerRacerssection from "../sections/AerRacerssection";
// import Scrollvideoanimetion from "../Component/Scrollvideoanimetion";
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
     <AerWingsection/>
     <FourthVideo/>
     <AerCarsection/>
     <FifthVideo/>
     <AerVoltsection/>
     <SixthVideo/>
     <AerShieldsection/>
     <SevenSection/>

     <AerRacerssection/>
      <PostCard />
      <Final />
      <Outro />
    </div>
  );
};

export default Home;
