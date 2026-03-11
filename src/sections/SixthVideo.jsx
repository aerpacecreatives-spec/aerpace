// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const SixthVideo = () => {
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);

//   useGSAP(() => {
//     const section = sectionRef.current;
//     const video = videoRef.current;

//     // Initial state
//     gsap.set(section, { marginTop: "-80vh", opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=200%",
//         scrub: 2,
//         pin: true,
//       },
//     });

//     // Fade in section
//     tl.to(section, {
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     });

//     // Scroll controlled playback
//     video.onloadedmetadata = () => {
//       tl.to(
//         video,
//         {
//           currentTime: video.duration,
//           duration: 3,
//           ease: "none",
//         },
//         "<"
//       );
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="sixth-vd-wrapper">
//       <div className="h-dvh">
//         <video
//           ref={videoRef}
//           muted
//           playsInline
//           preload="auto"
//           src="/videos/output2.mp4"  // 👈 apna video path yahan
//           className="sixth-vd"
//         />
//       </div>
//     </section>
//   );
// };

// export default SixthVideo;




// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const SixthImage = () => {
//   const sectionRef = useRef(null);
//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);

//   useGSAP(() => {
//     const section = sectionRef.current;
//     const image1 = image1Ref.current;
//     const image2 = image2Ref.current;

//     // Initial state
//     gsap.set(section, { marginTop: "-80vh", opacity: 0 });
//     gsap.set(image1, { scale: 1.4 });
//     gsap.set(image2, { scale: 1.4, opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=300%",
//         scrub: 2,
//         pin: true,
//       },
//     });

//     // Section fade
//     tl.to(section, {
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     });

//     // Image 1 zoom
//     tl.to(
//       image1,
//       {
//         scale: 1,
//         duration: 3,
//         ease: "power2.out",
//       },
//       "<"
//     );

//     // Image 2 cinematic reveal
//     tl.to(image2, {
//       opacity: 1,
//       scale: 1,
//       duration: 3,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="sixth-vd-wrapper relative">
      
//       <div className="h-dvh overflow-hidden relative">

//         {/* Image 1 */}
//         <img
//           ref={image1Ref}
//           src="/images/jason-3.webp"
//           className="absolute w-full h-full object-cover"
//         />

//         {/* Image 2 */}
//         <img
//           ref={image2Ref}
//           src="/images/jason-1.webp"
//           className="absolute w-full h-full object-cover"
//         />

//       </div>

//     </section>
//   );
// };

// export default SixthImage;



import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SixthImage = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const shadowRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const shadow = shadowRef.current;

    // Initial state
    gsap.set(section, { marginTop: "-80vh", opacity: 0 });
    gsap.set(image1, { scale: 1.4 });
    gsap.set(image2, { scale: 1.4, opacity: 0 });
    gsap.set(shadow, { y: "100%" }); // shadow hidden below

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        pin: true,
      },
    });

    // Section fade
    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    // Image 1 zoom
    tl.to(
      image1,
      {
        scale: 1,
        duration: 3,
        ease: "power2.out",
      },
      "<"
    );

    // Image 2 reveal
    tl.to(image2, {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.out",
    });

    // Shadow appear when image2 is halfway
    tl.to(
      shadow,
      {
        y: "0%",
        duration: 2,
        ease: "power2.out",
      },
      "-=1.5" // appear mid animation
    );
  }, []);

  return (
    <section ref={sectionRef} className="sixth-vd-wrapper relative">

      <div className="h-dvh overflow-hidden relative">

        {/* Image 1 */}
        <img
          ref={image1Ref}
          src="/images/jason-3.webp"
          className="absolute w-full h-full object-cover"
        />

        {/* Image 2 */}
        <img
          ref={image2Ref}
          src="/images/jason-1.webp"
          className="absolute w-full h-full object-cover"
        />

        {/* Black shadow overlay */}
       <div
  ref={shadowRef}
  className="absolute bottom-0 left-0 w-full h-full"
  style={{
    background:
      "linear-gradient(to top, #101017 0%, rgba(16,16,23,0.85) 40%, rgba(16,16,23,0) 100%)"
  }}
/>

      </div>

    </section>
  );
};

export default SixthImage;