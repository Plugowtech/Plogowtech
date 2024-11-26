import { Link } from "react-router-dom";
import Logo from '../assets/newMark.svg'

export const Nav = () => {
  return (
    <nav className="w-full pl-20 pr-20 pb-4 relative top-0 bg-[var(--background-primary)] z-10 flex items-center justify-between">
       <img src={Logo} alt="Logo" className="w-[120px] mt-4 " />
      <div className="w-[40%] m-auto flex items-center justify-around pt-2">
        <a className="link" href="#">Sobre nós</a>
        <a className="link" href="#">Premiações</a>
      </div>
      <div>
        <Link to={"/choosing-account"}>
          <button className="btn-nav-cadastro mr-4">Cadastre-se</button>
        </Link>
        <Link to={"/login"}>
          <button className="btn-nav-login">Entrar</button>
        </Link>
      </div>
    </nav>
  );
};
