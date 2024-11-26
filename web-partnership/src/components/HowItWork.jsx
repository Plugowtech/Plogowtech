import React from "react";
import { CardHow } from "./CardHow";
import { dataHowItWork } from "../mocks/howItWork.mock.js";
import { Link } from "react-router-dom";

export const HowItWork = () => {
  return (
    <section className="bg-[var(--background-secondary)] w-full mt-2 pb-7 pt-7 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-6xl font-bold">Como funciona?</h3>
        <p className="text-2xl mt-3 w-[70%] text-center">
          No<span className="font-extrabold"> PARTNERSHIP </span>, os usuários
          têm acesso a uma série de <span className="font-extrabold">funcionalidades</span> para otimizar suas
          experiências e recompensas:
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-[60px] mt-[50px] w-[90%]">
        {dataHowItWork?.map((item) => (
          <CardHow
            key={item.id}
            image={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Link to={"/choosing-account"}>
        <button className="bg-black w-[100%] p-5 h-[80px] mt-14 mb-14 text-white font-bold text-2xl rounded-xl hover:scale-105 transition-transform duration-200">
          Quero fazer parte
        </button>
      </Link>
    </section>
  );
};
