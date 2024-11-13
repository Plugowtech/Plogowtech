import BgFooter from "../assets/bg-footer.svg";
import Instagra from "../assets/instagra.svg";
import Facebook from "../assets/facebook.svg";
import Youtube from "../assets/youtube.svg";

export const Footer = () => {
  return (
    <footer className="w-full h-screen flex flex-col justify-center items-center">
      <div
        className="w-full h-full"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 40%), url(${BgFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[500px] text-center relative top-[300px] left-[1100px]">
          <h2 className="text-6xl font-bold border-b-4 border-white pb-5">
            PARTNERSHIP
          </h2>
          <p className="text-2xl mt-5">Uma parceria de sucesso!</p>
        </div>
      </div>
      <div>
        <p className="text-2xl mt-10 mb-5">Nos acompanhe nas redes sociais</p>
        <div className="flex items-center w-full justify-center gap-16 mb-5">
          <img src={Instagra} alt="instagran" className="cursor-pointer" />
          <img src={Facebook} alt="facebook" className="cursor-pointer" />
          <img src={Youtube} alt="youtube" className="cursor-pointer" />
        </div>
      </div>
      <p className="text-xl mb-3">copryting@Partnership cnpj:</p>
    </footer>
  );
};
