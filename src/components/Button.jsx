const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 bg-purple-600 text-white rounded-lg hover:opacity-90"
    >
      {children}
    </button>
  );
};

export default Button;