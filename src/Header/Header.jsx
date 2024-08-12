import './Header.css'

function Header() {


    return (
        <header className="cabecalho">
            <nav className="navegacao">
                <ul>
                    <li><a href="#sobre" className="links">Sobre</a></li>
                    <li><a href="#habilidades" className="links">Habilidades</a></li>
                    <li><a href="#projetos" className="links">Projetos</a></li>
                    <li><a href="#contato" className="links">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;