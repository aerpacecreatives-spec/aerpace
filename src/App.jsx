import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aerdock from "./pages/Aerdock";
import Home from "./pages/Home";
import Aerverse from "./pages/Areverse";
import AerVolt from "./pages/Aervolt";
import AerShield from "./pages/Aershield";
import AerCar from "./pages/AerCar";
import AerWing from "./pages/AerWing";
import Recers from "./pages/Recers";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aerverse" element={<Aerverse />} />
          <Route path="/aerdock" element={<Aerdock />} />
          <Route path="/aervolt" element={<AerVolt />} />
          <Route path="/aershield" element={<AerShield />} />
          <Route path="/aercar" element={<AerCar />} />
          <Route path="/aerwing" element={<AerWing />} />
          <Route path="/recers" element={<Recers/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
