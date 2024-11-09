import React from "react";

export const Header = () => {
  return (
    <header
      className="w-full absolute z-0 top-0 h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/banner_header.svg")' }}
    >
      <div>
        <h1>
          Bem-vindo ao<span>PARTNERSHIP</span>
        </h1>
        <p>
          <strong>PROFISSIONAIS</strong> : (Arquitetos, Engenheiros, Designers,
          Construtores, Paisagistas e outros);
        </p>
        <p>
          O <strong>PARTNERSHIP</strong> é mais do que um programa de
          recompensas; é uma <strong>experiência</strong> de fidelização pensada
          para fortalecer<strong>parcerias</strong> entre
          <strong>profissionais</strong>, consultores e nossas lojas parceiras.
          Neste <strong>sistema</strong>, cada participante acumula pontos
          valiosos que podem ser usados livremente para alcançar benefícios,
          criando um ciclo de <strong>reconhecimento e engajamento</strong>
          genuíno.
          <button className="btn-home">Quero fazer parte</button>
        </p>
      </div>
    </header>
  );
};
