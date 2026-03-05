// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

// const Jason = () => {
//   useGSAP(() => {
//     gsap.set('.jason', { marginTop: '-80vh' });

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: '.jason',
//         start: 'top 90%',
//         end: '10% center',
//         scrub: 2,
//       }
//     }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

//     gsap.to('.jason .img-box', {
//       scrollTrigger: {
//         trigger: '.jason',
//         start: 'top center',
//         end: '80% center',
//         scrub: 2
//       }, y: -300, duration: 1, ease: 'power1.inOut'
//     }, '<')
//   }) 

//   return (
//     <section className="jason">
//       <div className="max-w-lg jason-content">
//         <h1>Jason Duval</h1>
//         <h2>Jason wants an easy life, but things just keep getting harder.</h2>
//         <p>Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.</p>

//         <div className="jason-2">
//           <img src="/images/jason-2.webp" />
//         </div>
//       </div>

//       <div className="space-y-5 mt-96 img-box">
//         <div className="jason-1">
//           <img src="/images/jason-1.webp" />
//         </div>
//         <div className="jason-3">
//           <img src="/images/jason-3.webp" />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Jason



import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Jason = () => {
  const sliderRef = useRef(null)

  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0 })

    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 2
      },
      y: -300
    })
  })

  return (
    <section className="jason overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="max-w-lg jason-content z-10 relative">
        <h1 className="text-yellow font-long uppercase text-6xl md:text-8xl mb-10">
         "aerVerse"
        </h1>

        <h2 className="text-pink text-2xl md:text-4xl mb-6">
          Jason wants an easy life, but things just keep getting harder.
        </h2>

        <p className="text-white text-lg md:text-xl">
          Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.
        </p>

        <div className="jason-2 mt-10">
          <img src="/images/jason-2.webp" className="w-full object-cover" />
        </div>
      </div>

      {/* RIGHT SIDE IMAGES DESKTOP */}
      <div className="hidden md:flex space-y-5 mt-96 img-box flex-col">
        <div className="jason-1">
          <img src="/images/jason-1.webp" className="w-full object-cover" />
        </div>

        <div className="jason-3">
          <img src="/images/jason-3.webp" className="w-full object-cover" />
        </div>
      </div>

      {/* MOBILE CAROUSEL */}
      
{/* MOBILE CINEMATIC CAROUSEL */}
<div className="md:hidden mt-20 w-full relative">

  {/* Side fade masks */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10" />

  <div
    className="
      flex
      overflow-x-auto
      snap-x snap-mandatory
      scroll-smooth
      no-scrollbar
    "
  >
    {[
      "/images/jason-1.webp",
      "/images/jason-2.webp",
      "/images/jason-3.webp",
    ].map((src, index) => (
      <div
        key={index}
        className="
          snap-center
          min-w-[85%]
          flex-shrink-0
          px-2
        "
      >
        <img
          src={src}
          className="
            w-full
            h-[420px]
            object-cover
            rounded-xl
          "
        />
      </div>
    ))}
  </div>
</div>
    </section>
  )
}

export default Jason