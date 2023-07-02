import MottoLogo from './motto-logo.png';
import useDestructureString from '../../utils/useDestructureString';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Navbar() {

    const {scroll} = useLocomotiveScroll();

    const handleSmoothScrollClick = (sectionId: string) => {
        const sectionSelector = document.getElementById(`${sectionId}`);
        scroll.scrollTo(sectionSelector, {
            'offset': 0,
            'duration': 1000,
            'easing': [0.75, 0.00, 0.35, 1.00],
        });
    };

    return (
        <nav className="navbar-container">
            <img src={MottoLogo} alt="Motto logo" className="motto-logo" onClick={() => handleSmoothScrollClick('hero')}/>
            <div className="nav-links">
                <div className="about" onClick={() => handleSmoothScrollClick('about')}>{useDestructureString('à propos')}</div>
                <div className="menu" onClick={() => handleSmoothScrollClick('menu')}>{useDestructureString('menu')}</div>
                <div className="gallery" onClick={() => handleSmoothScrollClick('gallery')}>{useDestructureString('gallerie')}</div>
            </div>
        </nav>
    );
}
