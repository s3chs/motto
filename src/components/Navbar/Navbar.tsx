import MottoLogo from './motto-logo.png';

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img
                src={MottoLogo}
                alt="Motto logo"
                className="motto-logo"
            />
        </nav>
    );
}
