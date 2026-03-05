import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FourthVideo = () => {
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

    // Section fade in
    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    // Video play animation synced with scroll
    video.onloadedmetadata = () => {
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: 3,
          ease: "none",
        },
        "<" // start at the same time as fade
      );
    };
  }, []);

  return (
    <section ref={sectionRef} className="fourth-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4" // replace with your video path
          className="fourth-vd"
          style={{ objectPosition: "50% 50%" }} // inline style avoids PostCSS errors
        />
      </div>
    </section>
  );
};

export default FourthVideo;