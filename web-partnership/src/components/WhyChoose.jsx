import windows from "../assets/windows.svg";

export const WhyChoose = () => {
  return (
    <section className="w-[90%] h-screen flex flex-row justify-center items-center">
      <div className="w-[80%]  relative left-20 ">
        <img src={windows} alt="Janela de avião" className="w-[95%]" />
      </div>
      <div className="w-[88%] relative right-32 left-16">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-[2.7rem] font-extrabold">
            Por que escolher o <span className="font-light">PART</span> ?
          </h3>
          <p className="w-full text-[1.5rem] text-left">
            Nosso objetivo é simples:{" "}
            <span className="font-extrabold">
              {" "}
              incentivar a lealdade e as compras recorrentes com recompensas
              exclusivas e significativas
            </span>
            . Cada interação no sistema traz a oportunidade de acumular pontos
            que se convertem em Experiências Únicas como:
          </p>
          <ul className=" text-2xl mt-7 font-extrabold list-disc text-left">
            <li>Viagens Nacionais e Internacionais</li>
            <li>Cruzeiros</li>
            <li>Workshops de Aceleração Profissional</li>
            <li>Cashback e Promoções Exclusivas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
