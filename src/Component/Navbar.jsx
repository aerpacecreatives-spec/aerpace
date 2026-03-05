

// import { useState, useEffect } from "react";

// const NavBar = () => {
//   const [open, setOpen] = useState(false);

//   // 🔒 Lock background scroll when open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-5 fixed w-full z-[200]">
//         <img src="/images/nav-logo.svg" className="scale-90" alt="logo" />

//         {/* 🔥 Toggle Button */}
//         <div
//           className="w-10 h-10 flex items-center justify-center cursor-pointer relative z-[300]"
//           onClick={() => setOpen(!open)}
//         >
//           {/* Hamburger Lines */}
//           <span
//             className={`absolute w-8 h-[2px] bg-white transition-all duration-500 ${
//               open ? "rotate-45" : "-translate-y-2"
//             }`}
//           />
//           <span
//             className={`absolute w-8 h-[2px] bg-white transition-all duration-500 ${
//               open ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`absolute w-8 h-[2px] bg-white transition-all duration-500 ${
//               open ? "-rotate-45" : "translate-y-2"
//             }`}
//           />
//         </div>
//       </nav>

//       <SideMenu open={open} />
//     </>
//   );
// };

// export default NavBar;


// /* ================= SIDE MENU ================= */

// const SideMenu = ({ open }) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-full bg-black text-white z-[100] 
//       transform transition-transform duration-700 ease-in-out
//       ${open ? "translate-x-0" : "translate-x-full"}`}
//     >
//       <div className="flex h-full">
//         {/* Left Side Image */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="/images/jason-2.webp"
//             alt="menu bg"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Menu */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-16 space-y-8 text-4xl font-semibold">
//           <a href="#" className="hover:text-gray-400 transition">
//             AerVerse
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             AerDock
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             aerWing
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             aerCar
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             aerVolt
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             aerShield
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             Racers
//           </a>
//           <a href="#" className="hover:text-gray-400 transition">
//             #MakeTime Investors
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };











import { useState, useEffect } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-5 fixed w-full z-[200]">
        <img src="/images/nav-logo.svg" className="scale-90" alt="logo" />

        {/* Toggle Button */}
        <div
          className="w-10 h-10 flex items-center justify-center cursor-pointer relative z-[300]"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute w-8 h-[2px] bg-white transition-all duration-500 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-8 h-[2px] bg-white transition-all duration-500 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute w-8 h-[2px] bg-white transition-all duration-500 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </div>
      </nav>

      <SideMenu open={open} />
    </>
  );
};

export default NavBar;

/* ================= SIDE MENU ================= */

// const SideMenu = ({ open }) => {
//   const [activeImage, setActiveImage] = useState("/images/jason-2.webp");
//   const [fade, setFade] = useState(true);

//   const menuItems = [
//     { name: "AerVerse", image: "/images/lucia-1.webp" },
//     { name: "AerDock", image: "/images/lucia-2.webp" },
//     { name: "AerWing", image: "/images/lucia-3.webp" },
//     { name: "AerCar", image: "/images/jason-2.webp" },
//     { name: "AerVolt", image: "/images/hero-text.webp" },
//     { name: "AerShield", image: "/images/lucia-1.webp" },
//     { name: "Racers", image: "/images/lucia-2.webp" },
//     { name: "#MakeTime Investors", image: "/images/lucia-3.webp" },
//   ];

//   const handleHover = (img) => {
//     setFade(false); // fade out
//     setTimeout(() => {
//       setActiveImage(img);
//       setFade(true); // fade in
//     }, 300);
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-full bg-black text-white z-[100]
//       transform transition-transform duration-700 ease-in-out
//       ${open ? "translate-x-0" : "translate-x-full"}`}
//     >
//       <div className="flex h-full">

//         {/* Left Side Image */}
//         <div className="w-1/2 hidden md:block relative overflow-hidden">
//           <img
//             src={activeImage}
//             alt="menu preview"
//             className={`w-full h-full object-cover transition-all  decoration-1000 ease-in-out
//               ${fade ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
//           />
//         </div>

//         {/* Right Side Menu */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-16 space-y-8 text-4xl font-semibold">
//           {menuItems.map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               onMouseEnter={() => handleHover(item.image)}
//               className="hover:text-gray-400 transition duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };


const SideMenu = ({ open }) => {
  const [activeImage, setActiveImage] = useState("/images/jason-2.webp");
  const [fade, setFade] = useState(true);
  const [hovering, setHovering] = useState(false);

  const menuItems = [
    { name: "AerVerse", image: "/images/lucia-1.webp" },
    { name: "AerDock", image: "/images/lucia-2.webp" },
    { name: "AerWing", image: "/images/lucia-3.webp" },
    { name: "AerCar", image: "/images/jason-2.webp" },
    { name: "AerVolt", image: "/images/hero-text.webp" },
    { name: "AerShield", image: "/images/lucia-1.webp" },
    { name: "Racers", image: "/images/lucia-2.webp" },
    { name: "#MakeTime Investors", image: "/images/lucia-3.webp" },
  ];

  const handleHover = (img) => {
    setFade(false);
    setTimeout(() => {
      setActiveImage(img);
      setFade(true);
      setHovering(true); // start floating when hover
    }, 300);
  };

  // Floating effect with useEffect
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let animation;
    if (hovering) {
      let direction = 1;
      animation = setInterval(() => {
        setOffset((prev) => {
          if (prev > 10) direction = -1;
          if (prev < -10) direction = 1;
          return prev + direction * 0.5;
        });
      }, 30); // adjust speed here
    } else {
      setOffset(0);
    }
    return () => clearInterval(animation);
  }, [hovering]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-black text-white z-[100]
      transform transition-transform duration-700 ease-in-out
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-full">

        {/* Left Side Image */}
        <div className="w-1/2 hidden md:block relative overflow-hidden">
          <img
            src={activeImage}
            alt="menu preview"
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out`}
            style={{
              transform: `translateY(${offset}px) scale(${fade ? 1 : 1.5})`,
              opacity: fade ? 1 : 0,
            }}
          />
        </div>

        {/* Right Side Menu */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-16 space-y-8 text-4xl font-semibold">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onMouseEnter={() => handleHover(item.image)}
              onMouseLeave={() => setHovering(false)}
              className="hover:text-gray-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

