import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AerRacerssection = () => {

  useGSAP(() => {

    gsap.set(".aerracers-life", { marginTop: "-80vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aerracers-life",
        start: "top 80%",
        end: "top 20%",
        scrub: 2
      }
    });

    // previous section fade
    tl.to(".seven-vd", {
      opacity: 0,
      scale: 1.1,
      ease: "power1.out"
    });

    // new section reveal
    tl.to(".aerracers-life", {
      opacity: 1,
      ease: "power1.out"
    }, "<");

    // parallax images
    gsap.to(".aerracers-life .img-box", {
      y: -200,
      scrollTrigger: {
        trigger: ".aerracers-life",
        start: "top center",
        end: "bottom center",
        scrub: 2
      }
    });

  });

  return (
    <section className="aerracers-life relative">

      {/* cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101017] to-[#101017] pointer-events-none z-0"></div>

      {/* LEFT IMAGES */}
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96 relative z-10">

        <div className="aerracers-1">
          <img src="/images/jason-1.webp" />
        </div>

        <div className="aerracers-3">
          <img src="/images/jason-3.webp" />
        </div>

      </div>


      {/* RIGHT CONTENT */}
      <div className="lg:w-1/2 aerracers-life-content relative z-10">

        <div className="aerracers-2">
          <img src="/images/jason-2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10 text-white">
          aerpace racers team heralds the beginning of a new philosophy
          to accelerate the rally sport.
        </p>

      </div>

    </section>
  );
};

export default AerRacerssection;