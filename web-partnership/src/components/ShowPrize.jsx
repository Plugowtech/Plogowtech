import React from "react";
import { prizeData } from "../mocks/prizeData.mock.js";
import { PrizeCard } from "./PrizeCard";
import Travel from '../assets/travel.svg'

export const ShowPrize = () => {
  return (
    <section className="bg-white w-full mt-2 pb-7 pt-16 flex flex-col justify-center items-center">
      <div>
        <h3 className="text-5xl text-center text-black font-bold mb-24">
          Troque pontos por <span className="text-[var(--letter-color-secondary)]">EXPERIÊNCIAS INESQUECIVEIS</span>:
        </h3>
      </div>
      <div className="flex flex-row flex-wrap  gap-[60px] mt-[50px] w-[90%]">
        {prizeData?.map((item) => (
          <PrizeCard
            key={item.id}
            title={item.title}
            image={item.img}
            className="bg-black"
          />
        ))}
      </div>
      <button
        className="bg-[var(--letter-color-secondary)] w-[30%] h-[80px] mt-10 text-white font-bold text-2xl rounded-xl hover:scale-105 transition-transform duration-200"
        style={{
          borderRadius: "15px",
          boxShadow: "5px 8px 10px #282828, -2px -2px 10px #fff",
        }}
      >
        Veja todos os prêmios e viagens!
      </button>
      <img src={Travel} className="w-full" alt="Imagem de varios pontos turisticos" />
    </section>
  );
};
