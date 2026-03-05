import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FifthVideo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    // Initial state
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

    // Fade-in section
    tl.to(section, { opacity: 1, duration: 1, ease: "power1.inOut" });

    // Animate video playback as user scrolls
    video.onloadedmetadata = () => {
      tl.to(
        video,
        { currentTime: video.duration, duration: 3, ease: "none" },
        "<"
      );
    };
  }, []);

  return (
    <section ref={sectionRef} className="fifth-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/2160.9bf4e8d6192a59c7ff13a7362dfae577.mp4" // <--- replace with your video path
          className="size-full object-cover fifth-vd"
        />
      </div>
    </section>
  );
};

export default FifthVideo;