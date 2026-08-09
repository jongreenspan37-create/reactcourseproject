export default function BtnPill({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="border border-blue-500 text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded-full"
    >
      {children}
    </button>
  );
}
