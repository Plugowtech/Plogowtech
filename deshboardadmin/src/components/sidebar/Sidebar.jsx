import './Sidebar.css';
import logo from '../../assets/logo.svg';


const Sidebar = ({sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sedebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Partnership</h1>
                </div>
                <i
                onClick={() => closeSidebar()}
                className="fa fa-timer"
                id="sidebarIcon"
                aria-hiden="true"
                ></i>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Home</a>
                </div>
                <h2>Admin</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área administrativa</a>
                </div> 
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categirias</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-solid fa-wallet"></i>
                    <a href="#">Análise de pontos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="#">Administradores</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-circle"></i>
                    <a href="#">Usuários</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Pagamentos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tasks"></i>
                    <a href="#">A plataforma</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Políticas de privacidade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-solid fa-right-from-bracket"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
