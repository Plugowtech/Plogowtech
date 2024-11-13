import windows from "../assets/windows.svg";

export const WhyChoose = () => {
  return (
    <section className="w-full h-screen flex flex-row justify-center items-center">
      <div className="w-1/2">
        <img src={windows} alt="Janela de avião" className="w-[80%] m-auto" />
      </div>
      <div className="w-1/2 mt-[-100px]">
        <div className="w-[90%] flex flex-col justify-center items-center">
          <h3 className="text-[60px] ml-[-50px] font-extrabold text-center">
            Por que escolher o
            <span className="text-[var(--letter-color-secondary)]">
              {" "}
              PARTNERSHIP
            </span>
            ?
          </h3>
          <p className="text-[35px] mt-5 ml-5 w-[90%]">
            Nosso objetivo é simples: incentivar a lealdade e as compras
            recorrentes com recompensas exclusivas e significativas. Cada
            interação no sistema traz a oportunidade de acumular pontos que se
            convertem em Experiências Únicas como:
          </p>
          <ul className="text-[30px] ml-5 mt-7 list-disc pl-10">
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
