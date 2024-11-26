import BgFooter from "../assets/bg-footer.svg";
import Instagra from "../assets/instagra.svg";
import Facebook from "../assets/facebook.svg";
import Youtube from "../assets/youtube.svg";
import Logo from "../assets/newMarkTwo.svg";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center">
      <div
        className="w-full h-[500px] flex justify-center items-center"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 40%), url(${BgFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center relative ml-[700px]">
          <h2 className="text-6xl font-bold border-b-4 border-white pb-5">
            PARTNERSHIP
          </h2>
          <p className="text-2xl mt-5">Uma parceria de sucesso!</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-10">
        <img src={Logo} alt="logo" className="items-center" />
        <p className="text-2xl mt-10 mb-5">Nos acompanhe nas redes sociais</p>
        <div className="flex items-center w-full justify-center gap-16 mb-5">
          <img src={Instagra} alt="instagran" className="cursor-pointer" />
          <img src={Facebook} alt="facebook" className="cursor-pointer" />
          <img src={Youtube} alt="youtube" className="cursor-pointer" />
        </div>
      </div>
      <div className="bg-[#333] w-full text-center h-20">
        <p className="text-xl mt-4 mb-3">copryting@Partnership cnpj:</p>
      </div>
    </footer>
  );
};
