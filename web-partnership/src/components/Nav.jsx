import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-full pb-4 relative top-0 bg-gray-900 bg-opacity-50 z-10 flex items-center justify-between pr-[80px] pt-4">
      <div className="w-[600px] h-[45px] m-auto flex items-center justify-around pt-2">
        <a className="link" href="#">Sobre nós</a>
        <a className="link" href="#">Premiações</a>
      </div>
      <div>
        <Link to={"/choosing-account"}>
          <button className="btn-nav-cadastro mr-4">Cadastre-se</button>
        </Link>
        <Link to={"/login"}>
          <button className="btn-nav-login">Login</button>
        </Link>
      </div>
    </nav>
  );
};
