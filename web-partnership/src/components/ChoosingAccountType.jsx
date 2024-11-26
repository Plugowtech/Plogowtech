import PersonImg from "../assets/personImg.svg";
import CompanyImg from "../assets/companyImg.svg";
import { ReturnImag } from "../components/ReturnImag";
import { Link } from "react-router-dom";
import Logo from "../assets/newMarkTwo.svg";

export const ChoosingAccountType = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <section className="bg-[rgba(0,0,0,0.65)] w-[60%] h-[90%] flex flex-col items-center pt-10 relative rounded-2xl">
        <div>
          <img src={Logo} alt="logo" className="absolute top-4 right-4"/>
       </div>
       
        <div className="absolute top-4 left-4">
          <ReturnImag rota="/" />
        </div>

        <h2 className="text-5xl font-bold pb-4 pt-7">Escolha o tipo de conta:</h2>
        <p className="text-2xl pb-4">Que tipo de conta deseja criar?</p>

        <Link
          to="/company-registration"
          className="bg-white w-[85%] h-[50%] flex flex-row items-center text-[var(--letter-color-secondary)] mb-9 rounded-xl relative font-semibold after:absolute after:h-1 after:w-3 after:bg-[var(--background-secondary)] after:left-5 after:bottom-0 after:translate-y-full after:rounded-md overflow-hidden after:transition-all after:duration-700 after:hover:scale-[300] text-2xl after:-z-20 z-10  hover:text-white duration-500"
        >
          <div className="flex flex-row items-center w-full">
            <img
              src={CompanyImg}
              alt="imagem de escolha de cadastro de empresa"
              className="size-52 ml-4 mr-9"
            />
            <div className="ml-10">
              <h4 className="text-4xl font-extrabold">CORPORATIVO:</h4>
              <p className="text-2xl font-extrabold mt-2">
                Cadastre seu negócio no PARTNERSHIP e fidelize os seus clientes
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/person-registration"
          className="bg-white w-[85%] h-[50%] flex flex-row items-center text-[var(--letter-color-secondary)] mb-9 rounded-xl relative font-semibold after:absolute after:h-1 after:w-3 after:bg-[var(--background-secondary)] after:left-5 after:bottom-0 after:translate-y-full after:rounded-md overflow-hidden after:transition-all after:duration-700 after:hover:scale-[300] text-2xl after:-z-20 z-10  hover:text-white duration-500"
        >
          <div className="flex flex-row items-center w-full">
            <img
              src={PersonImg}
              alt="imagem de escolha de cadastro de pessoa física"
              className="size-52 ml-4 mr-9"
            />
            <div className="ml-10">
              <h4 className="text-4xl font-extrabold">Pessoa Física:</h4>
              <p className="text-2xl font-extrabold mt-2 pr-2">
                Compre das lojas parceiras e receba pontos para ganhar super
                prêmios.
              </p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};
