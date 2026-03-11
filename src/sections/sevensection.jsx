// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const SevenSection = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);

//   useGSAP(() => {
//     const section = sectionRef.current;
//     const image = imageRef.current;

//     // Initial state
//     gsap.set(section, { marginTop: "-80vh", opacity: 0 });
//     gsap.set(image, { scale: 1.3 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=200%",
//         scrub: 2,
//         pin: true,
//       },
//     });

//     // Fade section
//     tl.to(section, {
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     });

//     // Cinematic image zoom
//     tl.to(
//       image,
//       {
//         scale: 1,
//         duration: 3,
//         ease: "power2.out",
//       },
//       "<"
//     );
//   }, []);

//   return (
//     <section ref={sectionRef} className="sixth-vd-wrapper">
//       <div className="h-dvh overflow-hidden">
//         <img
//           ref={imageRef}
//           src="/images/jason-2.webp"
//           alt="cinematic"
//           className="sixth-img w-full h-full object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default SevenSection;

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SevenSection = () => {

  const navigator = useNavigate();

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {

    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    gsap.set(section, { marginTop: "-80vh", opacity: 0 });
    gsap.set(image, { scale: 1.3 });
    gsap.set(text, { y: 80, opacity: 0 });
    gsap.set(overlay, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: 2,
        pin: true,
      }
    });

    // section fade
    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    });

    // image zoom
    tl.to(image, {
      scale: 1,
      duration: 3,
      ease: "power2.out"
    }, "<");

    // text reveal
    tl.to(text, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=2");

    // cinematic dark mask
    tl.to(overlay, {
      opacity: 1,
      duration: 2,
      ease: "power1.out"
    }, "-=1");

  }, []);

  return (
    <section ref={sectionRef} className="sixth-vd-wrapper relative">

      <div className="h-dvh overflow-hidden relative">

        {/* IMAGE */}
        <img
          ref={imageRef}
          src="/images/jason-3.webp"
          className="sixth-img seven-vd w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#101017] opacity-0 pointer-events-none"
        />

        {/* TEXT */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-80 -translate-y-1/2 text-white z-10"
        >
          <h2 className="text-yellow font-long uppercase text-8xl mb-10">
            "Racers"
          </h2>

          <p className="text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10">
            We live and breathe motorsport
          </p>

          <p className="text-white md:text-2xl text-lg md:pe-28 pe-14">
            aerpace racers team heralds the beginning of a new philosophy
            to accelerate the rally sport.
          </p>

          <Button onClick={() => navigator("/racers")}>
            read more
          </Button>

        </div>

      </div>

    </section>
  );
};

export default SevenSection;