import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
const AerCar = () => {
     const navigator = useNavigate()
  useGSAP(() => {
    // Set initial position
    gsap.set(".aercar-section", { marginTop: "-80vh" });

    // Timeline for scroll animations
    gsap.timeline({
      scrollTrigger: {
        trigger: ".aercar-section",
        start: "top 80%",
        end: "10% center",
        scrub: 2,
      },
    }).to(".fourth-vd", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    // Images parallax scroll
    gsap.to(".aercar-section .img-box", {
      scrollTrigger: {
        trigger: ".aercar-section",
        start: "top center",
        end: "80% center",
        scrub: 2,
      },
      y: -150, // slightly different parallax
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="aercar-section">
      <div className="flex flex-col gap-6 items-start img-box lg:w-1/2 ps-10 mt-72">
        <div className="aercar-1">
          <img src="/images/jason-1.webp" alt="AerCar 1" />
        </div>
        <div className="aercar-2">
          <img src="/images/jason-2.webp" alt="AerCar 2" />
        </div>
      </div>

      <div className="lg:w-1/2 aercar-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>"AerCar"</h1>
          <h2>The ultimate ride in Liberty City</h2>
          <p>
            AerCar is not just a vehicle — it’s a statement. Speed, style, and 
            precision engineered for the daring.
          </p>
               <Button onClick={()=>navigator("/aercars")}>read more</Button>
        </div>

        <div className="aercar-3">
          <img src="/images/aercar-3.webp" alt="AerCar 3" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          Every corner, every street, every challenge — AerCar takes it all with elegance.
        </p>
      </div>
    </section>
  );
};

export default AerCar;










