import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const AerStory = () => {

  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const textRef = useRef(null)

  useGSAP(() => {

    const section = sectionRef.current
    const video = videoRef.current
    const text = textRef.current

    gsap.set(video, { scale: 1.1 })
    gsap.set(text, { y: 80, opacity: 0 })

    // video move
    gsap.to(video, {
      y: -150,
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    })

    // text move
    gsap.to(text, {
      y: -120,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    })

  })

  return (
    <section
      ref={sectionRef}
      className="flex lg:flex-row flex-col items-center gap-10 py-40 px-10 bg-black text-white"
    >

      {/* LEFT VIDEO */}
      <div className="lg:w-1/2 w-full overflow-hidden rounded-xl">
        <video
          ref={videoRef}
          src="/videos/output1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="lg:w-1/2 w-full">

        <div ref={textRef} className="max-w-xl">

          <h1 className="text-yellow font-long uppercase text-6xl mb-6">
            "aerRacers"
          </h1>

          <h2 className="text-pink text-3xl mb-6">
            We live and breathe motorsport.
          </h2>

          <p className="text-lg mb-4">
            The world of racing is more than speed —
            it's a story of ambition, risk and adrenaline.
          </p>

          <p className="text-lg">
            aerRacers bring the spirit of competition
            to the streets with unstoppable energy.
          </p>

        </div>

      </div>

    </section>
  )
}

export default AerStory