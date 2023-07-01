import MottoLogo from './motto-logo.png';
import useDestructureString from '../../utils/useDestructureString';

export default function Navbar() {

    return (
        <nav className="navbar-container">
            <img src={MottoLogo} alt="Motto logo" className="motto-logo"/>
            <div className="nav-links">
                <div className="about">{useDestructureString('à propos')}</div>
                <div className="menu">{useDestructureString('menu')}</div>
                <div className="gallery">{useDestructureString('gallerie')}</div>
            </div>
        </nav>
    );
}
