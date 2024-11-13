

export const Input = ({ type, name, label, value, onChange, error }) => {
  return (
    <div className="input-container flex flex-col">
      <input
        className="input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=""
      />
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      {error && <span className="text-red-500 font-bold text-lg mt-4 absolute top-8">{error}</span>}
    </div>
  );
};
