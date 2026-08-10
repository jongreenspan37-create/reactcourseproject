export default function BtnBlue({ type = "button", onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
