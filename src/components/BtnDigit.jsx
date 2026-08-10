export default function BtnDigit({ value, onPress }) {
  return (
    <button
      className="w-full h-full flex items-center 
                justify-center border border-slate-700 bg-slate-200 
                rounded-lg font-bold cursor-pointer 
                hover:bg-slate-300 transition shadow-sm"
      onClick={() => onPress(value)}
    >
      {value}
    </button>
  );
}
