export default function Field({ label, id, options, className = "", ...inputProps }) {
  const fieldClassName = `p-2 border border-solid rounded-lg ${className}`.trim();

  return (
    <>
      <label className="text-bold" htmlFor={id}>
        {label}
      </label>
      {options ? (
        <select className={fieldClassName} id={id} {...inputProps}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input className={fieldClassName} id={id} {...inputProps} />
      )}
    </>
  );
}
