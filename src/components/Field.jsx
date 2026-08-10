export default function Field({ inStyle, label, id, options, ...inputProps }) {
  return (
    <>
      <label className="text-bold" htmlFor={id}>
        {label}
      </label>
      {options ? (
        <select
          className="p-2 border border-solid rounded-lg"
          id={id}
          {...inputProps}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="p-2 border border-solid rounded-lg"
          id={id}
          {...inputProps}
        />
      )}
    </>
  );
}
