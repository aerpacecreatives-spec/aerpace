import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AerVolt = () => {
  useGSAP(() => {
    gsap.set('.aervolt-life', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.aervolt-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.fifth-vd', {   // 👈 previous video fade
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut'
    });

    gsap.to('.aervolt-life .img-box', {
      scrollTrigger: {
        trigger: '.aervolt-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      },
      y: -200,
      duration: 1,
      ease: 'power1.inOut'
    });
  });

  return (
    <section className="aervolt-life">
      {/* Images Left */}
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96">
        <div className="aervolt-1">
          <img src="/images/aervolt-1.webp" />
        </div>

        <div className="aervolt-3">
          <img src="/images/aervolt-3.webp" />
        </div>
      </div>

      {/* Text + Middle Image Right */}
      <div className="lg:w-1/2 aervolt-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>''aerVolt''</h1>

          <h2>
            Power. Precision. Pure electric dominance.
          </h2>

          <p>
            Built for the streets of tomorrow, aerVolt blends raw acceleration 
            with silent performance. No noise — just impact.
          </p>
        </div>

        <div className="aervolt-2">
          <img src="/images/aervolt-2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          When the city lights flicker, aerVolt moves like lightning —
          fast, fearless, unstoppable.
        </p>
      </div>
    </section>
  );
};

export default AerVolt;