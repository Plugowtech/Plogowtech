import Woman from "../assets/woman.svg";

export const AboutTravel = () => {
  return (
    <section className="w-full h-screen flex flex-row">
      <div className="w-1/2 flex flex-col justify-center items-center mt-40">
        <h3 className="text-7xl font-extrabold mb-[100px] ml-32 hover:text-[var(--letter-color-secondary)]">
          Viagens
        </h3>
        <p className="text-3xl font-extrabold hover:text-[var(--letter-color-secondary)] ml-32 w-[90%]">
          Conheça agora algumas das experiências que nossos parceiros poderão
          viver no PARTNERSHIP!
        </p>
        <button className="bg-[var(--letter-color-secondary)] p-5  mt-32 text-white font-bold text-2xl rounded-xl hover:scale-105 transition-transform duration-200  ml-32">
          Conhecer os prêmios
        </button>
      </div>
      <div className="w-1/2 flex flex-col items-center  justify-center">
        <div className="w-[60%] h-[60%] bg-[var(--background-secondary)] mt-56 flex items-center justify-center relative rounded-[70px]"></div>
        <img
          src={Woman}
          alt="Moça indicando para que conheça nossos prêmios"
          style={{
            width: "900px",
            right: "-350px",
            position: "absolute",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </section>
  );
};
