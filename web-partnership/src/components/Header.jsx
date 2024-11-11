import bgHeader from "../assets/bg-header.png";
import Bag from '../assets/bag.svg'

export const Header = () => {
  return (
    <header className=" w-full h-full">
      <div
        className="absolute top-1 left-0 w-full h-full bg-[var(--background-secondary)]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
        }}
      ></div>
      <div
        className="w-full absolute top-0 h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgHeader})`,
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
        }}
      ></div>
      <section className="w-full flex align-items-center justify-center">
        <div className="container w-[60%] relative top-[180px] left-[70px] ">
          <h1 className="text-[3.5rem] font-bold mb-6">
            Bem-vindo ao{" "}
            <span className="text-[var(--letter-color-secondary)]">
              {" "}
              PARTNERSHIP
            </span>
          </h1>

          <p className="text-[1.3rem] mb-5">
            <strong>PROFISSIONAIS</strong>: (Arquitetos, Engenheiros, Designers,
            Construtores, Paisagistas e outros);
          </p>

          <div className="text-[2rem] w-[85%] ">
            <p>
              O <strong>PARTNERSHIP</strong> é mais do que um programa de
              recompensas; é uma experiência de fidelização pensada para
              fortalecer parcerias entre profissionais, consultores e nossas
              lojas parceiras.
            </p>

            <button className="btn-home mt-5">Quero fazer parte</button>
          </div>
        </div>
        <div className="relative">
          <img
            src={Bag}
            alt="Mala de viagem"
            className="relative size-[700px] right-10"
          />
        </div>
      </section>
    </header>
  );
};
