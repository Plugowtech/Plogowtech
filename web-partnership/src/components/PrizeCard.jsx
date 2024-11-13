import { Link } from "react-router-dom";

export const PrizeCard = ({ title, image, text, className, classNameText }) => {
  const basicStyle =
    "w-[335px] min-h-[582px] m-auto pt-3 pl-4 pr-4 rounded-xl flex flex-col items-center";

  const basicStyleText = "mt-5 text-lg pb-5";
  return (
    <div
      className={`${className} ${basicStyle}`}
      style={{
        borderRadius: "10px",
        boxShadow: "8px 8px 15px #282828, -8px -8px 15px #3e3e3e",
      }}
    >
      <img
        src={image}
        alt="algo"
        className="size-auto"
        style={{
          borderRadius: "15px",
          boxShadow: "5px 8px 10px #282828, -2px -2px 10px #fff",
        }}
      />
      <h4 className="text-4xl mt-7 font-bold">{title}</h4>
      <p className={`${basicStyleText} ${classNameText}`}>{text}</p>
      <Link to="/choosing-account" className="w-full flex justify-center">
        <button className="btn-inputs">Participar</button>
      </Link>
    </div>
  );
};
