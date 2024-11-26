import { dataAccelerate } from "../mocks/accelerate.mock";
import { PrizeCard } from "./PrizeCard";
import Partner from "../assets/parner.svg";

export const Accelerate = () => {
  return (
    <section className="w-full mt-2 pb-7 pt-7 flex flex-col justify-center items-center">
      <h2 className="w-[40%] text-5xl font-bold mb-24 mt-8 text-center">
        Acelera{" "}
        <span className="text-[var(--letter-color-secondary)]">
          Partnership
        </span>{" "}
        e muito mais ...
      </h2>
      <div className="flex flex-row flex-wrap  gap-[60px] mt-[50px] w-[90%] text-[var(--letter-color-secondary)]">
        {dataAccelerate?.map((item) => (
          <PrizeCard
            className={"bg-white"}
            key={item.id}
            image={item.img}
            title={item.title}
            text={item.text}
            classNameText={"font-bold ml-5 text-center"}
          />
        ))}
      </div>
      <button className="bg-[var(--letter-color-secondary)] p-5  mt-32 text-white font-bold text-2xl rounded-xl hover:scale-105 transition-transform duration-200">
        Veja todos os prêмios
      </button>
      <img src={Partner} alt="Parceiros" className="w-[90%] mt-24" />
    </section>
  );
};
