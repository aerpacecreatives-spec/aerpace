import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
const AerShield = () => {

    const navigator = useNavigate()
  useGSAP(() => {
    gsap.set(".aershield-section", { marginTop: "-60vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".aershield-section",
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".sixth-vd", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

    gsap.to(".aershield-section .img-box", {
      scrollTrigger: {
        trigger: ".aershield-section",
        start: "top center",
        end: "80% center",
        scrub: 2,
      },
      y: -150,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div>
      <section className="aershield-section">
        {/* Text Left */}
        <div className="lg:w-1/2 aershield-content ps-10 mt-24 lg:mt-0">
          <div className="max-w-xl">
            <h1>''aerShield''</h1>
            <h2>Defense redefined for the modern battlefield.</h2>
            <p>
              aerShield is engineered for resilience. Adaptive armor, reactive
              protection, and unmatched durability.
            </p>
            <p>
              When pressure rises, aerShield stands unbreakable — built to
              absorb, adapt, and overcome.
            </p>

          <Button onClick={()=>navigator("/aershield")}> read more</Button>
            {/* Third image under text */}
            <div className="aershield-3 mt-10">
              <img src="/images/lucia-3.webp" />
            </div>
            <div className="aershield-3 mt-10">
              <img src="/images/jason-3.webp" />
            </div>
          </div>
        </div>

        {/* Two Images Right */}
        <div className="flex flex-col gap-6 img-box lg:w-1/2 mt-24 lg:mt-0">
          <div className="aershield-1">
            <img src="/images/jason-3.webp" />
          </div>

          <div className="aershield-2">
            <img src="/images/jason-2.webp" />
          </div>

          <p>
            aerShield is engineered for resilience. Adaptive armor, reactive
            protection, and unmatched durability.
          </p>
          <p>
            When pressure rises, aerShield stands unbreakable — built to absorb,
            adapt, and overcome.
          </p>

        </div>
      </section>





    </div>
  );
};

export default AerShield;
