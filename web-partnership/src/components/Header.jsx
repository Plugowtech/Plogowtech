import bgHeader from "../assets/bg-header.png";

export const Header = () => {
  return (
    <header
      className="w-full absolute z-0 top-0 h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div className="container w-[800px] relative top-[150px] left-[200px] ">
        <h1 className="text-4xl font-bold mb-6">
          Bem-vindo ao <span className="text-primary">PARTNERSHIP</span>
        </h1>

        <p>
          <strong>PROFISSIONAIS</strong>: (Arquitetos, Engenheiros, Designers,
          Construtores, Paisagistas e outros);
        </p>

        <div className="max-w-3xl">
          <p>
            O <strong>PARTNERSHIP</strong> é mais do que um programa de
            recompensas; é uma <strong>experiência</strong> de fidelização
            pensada para fortalecer
            <strong>parcerias</strong> entre <strong>profissionais</strong>,
            consultores e nossas lojas parceiras. Neste <strong>sistema </strong>
            , cada participante acumula pontos valiosos que podem ser usados
            livremente para alcançar benefícios, criando um ciclo de
            <strong>reconhecimento e engajamento </strong>
            genuíno.
          </p>

          <button className="btn-home mt-5">Quero fazer parte</button>
        </div>
      </div>
    </header>
  );
};
