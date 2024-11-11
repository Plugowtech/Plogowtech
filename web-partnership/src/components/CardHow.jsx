

export const CardHow = ({image, title, description}) => {
  return (
    <div
      className="bg-black w-[528px] min-h-[370px] m-auto pt-5 pl-9 pr-9 rounded-xl"
      style={{
        borderRadius: "31px",
        boxShadow: "8px 8px 15px #282828, -8px -8px 15px #3e3e3e",
      }}
    >
      <img
        src={image}
        alt="algo"
        style={{
          borderRadius: "31px",
          boxShadow: "5px 8px 10px #282828, -2px -2px 10px #fff",
        }}
      />
      <p className='mt-5 text-lg pb-5'>
        <strong>{title} :</strong> {description}
      </p>
    </div>
  );
}
