

export const Input = ({ type, name, label, value, onChange }) => {
  return (
    <div className="input-container">
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
    </div>
  );
};
