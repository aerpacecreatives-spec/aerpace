import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
const NextLucia = () => {
  const navigate = useNavigate()
  useGSAP(() => {
    gsap.set(".nextlucia-life", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".nextlucia-life",
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".third-vd", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

    gsap.to(".nextlucia-life .img-box", {
      scrollTrigger: {
        trigger: ".nextlucia-life",
        start: "top center",
        end: "80% center",
        scrub: 2,
      },
      y: -200,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nextlucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96">
        <div className="nextlucia-1">
          <img src="/images/lucia-1.webp" />
        </div>
        <div className="nextlucia-3">
          <img src="/images/lucia-3.webp" />
        </div>
      </div>

      <div className="lg:w-1/2 nextlucia-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>"AerWing"</h1>
          <h2>Smarter travel for tomorrow</h2>
          <p>
            From smoother, premium commute experiences, to rugged, stylish
            expressions, the aerWing makes every trip better, in ways that
            matter the most to you.
          </p>
          <Button onClick={()=>navigate("/aerwing")}> read more</Button>
        </div>
      

        <div className="nextlucia-2 mt-10">
          <img src="/images/lucia-2.webp" />
        </div>
        <div className="nextlucia-2">
          <img src="/images/jason-2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          The world is unforgiving — but this time, the rules are different.
        </p>
      </div>
    </section>
  );
};

export default NextLucia;
