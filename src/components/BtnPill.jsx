export default function BtnPill({
  type = "button",
  onClick,
  disabled,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="border border-blue-500 text-blue-500 
        hover:text-blue-700 font-bold py-2 px-4 rounded-full 
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-blue-500"
    >
      {children}
    </button>
  );
}
