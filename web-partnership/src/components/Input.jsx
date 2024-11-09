

export const Input = () => {
  return (
    <div className="input-container">
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=""
      />
      <label className="input-label" htmlFor="">
        
      </label>
    </div>
  );
}
