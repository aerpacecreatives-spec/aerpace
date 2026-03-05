// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const ThirdVideo = () => {
//   const videoRef = useRef(null);

//   useGSAP(() => {

//     gsap.set(".third-vd-wrapper", { marginTop: "-80vh", opacity: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".third-vd-wrapper",
//         start: "top top",
//         end: "+=200% top",
//         scrub: 2,
//         pin: true,
//       },
//     });

//     // fade in section
//     tl.to(".third-vd-wrapper", {
//       opacity: 1,
//       duration: 1,
//       ease: "power1.inOut",
//     });

//     // video scroll scrub
//     videoRef.current.onloadedmetadata = () => {
//       tl.to(
//         videoRef.current,
//         {
//           currentTime: videoRef.current.duration,
//           duration: 3,
//           ease: "power1.inOut",
//         },
//         "<"
//       );
//     };
//   }, []);

//   return (
//     <section className="third-vd-wrapper">
//       <div className="h-dvh">
//         <video
//           ref={videoRef}
//           muted
//           playsInline
//           preload="auto"
//           src="/videos/2160.9bf4e8d6192a59c7ff13a7362dfae577.mp4"
//           className="size-full object-cover third-vd"
//           style={{ objectPosition: "50% center" }}
//         />
//       </div>
//     </section>
//   );
// };

// export default ThirdVideo;


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ThirdVideo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    gsap.set(section, { marginTop: "-80vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    video.onloadedmetadata = () => {
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: 3,
          ease: "none",
        },
        "<"
      );
    };
  }, []);

  return (
    <section ref={sectionRef} className="third-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/2160.9bf4e8d6192a59c7ff13a7362dfae577.mp4"
          className="size-full object-cover third-vd"
        />
      </div>
    </section>
  );
};

export default ThirdVideo;