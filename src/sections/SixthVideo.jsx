import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SixthVideo = () => {
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

    // Fade in section
    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    // Scroll controlled playback
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
    <section ref={sectionRef} className="sixth-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"  // 👈 apna video path yahan
          className="sixth-vd"
        />
      </div>
    </section>
  );
};

export default SixthVideo;