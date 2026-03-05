const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white p-4 border-3 border-yellow-200 rounded-full my-3 capitalize font-bold 
      hover:bg-yellow-200 hover:text-black transition-all duration-600
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;