import React from "react";

export const Nav = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 bg-transparent bg-opacity-50 z-10 flex items-center justify-between pr-[80px] pt-4">
      <div className="w-[600px] h-[45px] m-auto flex items-center justify-around pt-2">
        <a href="#">Sobre nós</a>
        <a href="#">Premiações</a>
      </div>
      <div>
        <button className="btn-nav-cadastro mr-4">Cadastre-se</button>
        <button className="btn-nav-login">Login</button>
      </div>
    </nav>
  );
};

