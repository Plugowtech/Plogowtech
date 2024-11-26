import Woman from "../assets/woman.svg";
import Logo from "../assets/newMarkTwo.svg";

export const AboutTravel = () => {
  return (
    <section className="w-full h-screen flex flex-row">
      <div className="relative left-20 top-14">
        <img src={Logo} alt="logo" className="w-24" />
      </div>
      <div className="w-1/2 flex flex-col justify-center pt-28">
        <h3 className="text-7xl font-extrabold mb-10 hover:text-[var(--letter-color-secondary)]">
          Viagens
        </h3>
        <p className="text-3xl">
          Conheça agora algumas das{" "}
          <span className="font-extrabold hover:text-[var(--letter-color-secondary)]">
            experiências
          </span>{" "}
          que nossos parceiros poderão viver no{" "}
          <span className="font-extrabold hover:text-[var(--letter-color-secondary)]">
            PARTNERSHIP
          </span>
          !
        </p>
        <div className="w-4/5 ">
          <button className="bg-[var(--letter-color-secondary)] p-5  mt-24 text-white font-bold text-2xl rounded-xl hover:scale-105 transition-transform duration-200  ml-32">
            Conhecer os prêmios
          </button>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center  justify-center">
        <div className="w-[60%] h-[60%] bg-[var(--background-secondary)] mt-48 flex items-center justify-center relative rounded-[70px]"></div>
        <img
          src={Woman}
          alt="Moça indicando para que conheça nossos prêmios"
          style={{
            width: "720px",
            right: "-330px",
            position: "absolute",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </section>
  );
};
