// CommonNavLink.jsx
import { NavLink } from "react-router-dom";

const CommonNavLink = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full font-bold transition-colors duration-300 ${
          isActive ? "bg-yellow-200 text-black" : "text-white hover:bg-yellow-200 hover:text-black"
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CommonNavLink;