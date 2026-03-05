import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Home from "./pages/Home"
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      

      <Home/>
    </main>
  )
}

export default App