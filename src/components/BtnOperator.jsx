export default function BtnOperator({ value, onPress, sign }) {
  return (
    <button
      className="w-full h-full flex items-center 
                justify-center border border-slate-400 bg-orange-200 
                rounded-lg font-medium cursor-pointer 
                hover:bg-orange-300 transition shadow-sm"
      onClick={() => onPress(value)}
    >
      {sign}
    </button>
  );
}
