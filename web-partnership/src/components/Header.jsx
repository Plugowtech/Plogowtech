import bgHeader from "../assets/bg-header.png";
import Person from '../assets/imgHeader.svg'
import { Link } from "react-router-dom";

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
      <section className="w-full grid grid-cols-2 ml-24 mr-24">
        <div className="w-[90%]  relative top-11 ">
          <h1 className="text-[2.5rem] font-extrabold">
            TRANSFORME{" "}
            <span className="text-[var(--letter-color-secondary)]">PONTOS</span>{" "}
            EM EXPERIÊNCIA
          </h1>

          <p className="text-[1.2rem]">
            <strong>PROFISSIONAIS</strong>: (Arquitetos, Engenheiros, Designers,
            Construtores, Paisagistas e outros);
          </p>

          <div className="text-[1.3rem] w-[85%]  ">
            <p>
              O <strong>PARTNERSHIP</strong> é mais do que um programa de
              recompensas; é uma<strong>experiência</strong> de fidelização
              pensada para fortalecer <strong>parcerias</strong>.
            </p>
            <Link to="/choosing-account" className="w-full flex">
              <button className="btn-home mt-5">Quero fazer parte</button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={Person}
            alt="Mala de viagem"
            className="relative size-[85%]"
          />
        </div>
      </section>
    </header>
  );
};
