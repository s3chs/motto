import gsap from 'gsap';
import { useEffect } from 'react';
import useDestructureString from '../../utils/useDestructureString';

export default function Hero() {

    const barDescription = 'hi-fi music, food & drinks';
    const barName = 'motto';

    const destructureString = (string: string) => {
        return string.split('').map((letter: string, i: number) => {
            return letter === ' ' ? (<span key={i}>&nbsp;</span>) : (<span key={i}>{letter}</span>);
        });
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.introduction-container span', {
            duration: 0.7,
            opacity: 1,
            ease: 'power4.inOut',
            stagger: 0.060,
            delay: 0.5,
        }).to('.introduction-container span', {
            duration: 1,
            opacity: 0,
            ease: 'power4.inOut',
            stagger: 0.060,
            delay: -0.5,
        }).set('.introduction-container', {
            display: 'none',
        }).to('.hero-title span', {
            duration: 3,
            y: 0,
            ease: 'elastic.inOut',
            stagger: 0.2,
            delay: -1,
        }).to('.bar-openings span', {
            duration: 0.8,
            y: 0,
            ease: 'power3.inOut',
            stagger: 0.2,
            delay: -1.5,
        }).to('.navbar-container', {
            duration: 1.5,
            top: 0,
            ease: 'power3.inOut',
            delay: -2,
        }).add('opacityAnim').to('.bar-description span', {
            duration: 0.25,
            opacity: 1,
            ease: 'power3.inOut',
            stagger: 0.035,
            delay: -0.8,
        }).to('.motto-mantra span', {
            duration: 0.25,
            opacity: 1,
            ease: 'power3.inOut',
            stagger: 0.070,
            delay: -0.8,
        }, 'opacityAnim');
    }, []);

    return (
        <div id="hero" className="hero-container" data-scroll-section>
            <div className="hero-content">
                <div className="bar-description" data-scroll data-scroll-speed="1" data-scroll-position="top">
                    {useDestructureString(barDescription)}
                </div>
                <div className="hero-title" data-scroll data-scroll-speed="1.5" data-scroll-position="top">
                    {useDestructureString(barName)}
                </div>
                <div className="bar-infos">
                    <div className="bar-openings" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div><span>33, rue piliers de tutelle</span></div>
                        <div><span>bordeaux</span></div>
                        <div><span className="opening-days">tuesday — saturday, 3pm till late</span></div>
                    </div>
                    <div className="motto-mantra">
                        <span data-scroll data-scroll-speed="1" data-scroll-position="top">b</span>
                        <span data-scroll data-scroll-speed="0.8" data-scroll-position="top">o</span>
                        <span data-scroll data-scroll-speed="0.7" data-scroll-position="top">i</span>
                        <span data-scroll data-scroll-speed="1.1" data-scroll-position="top">r</span>
                        <span data-scroll data-scroll-speed="1.3" data-scroll-position="top">e</span>
                        <span data-scroll data-scroll-speed="1" data-scroll-position="top">,&nbsp;</span>
                        <span data-scroll data-scroll-speed="1" data-scroll-position="top">é</span>
                        <span data-scroll data-scroll-speed="1.3" data-scroll-position="top">c</span>
                        <span data-scroll data-scroll-speed="1.1" data-scroll-position="top">o</span>
                        <span data-scroll data-scroll-speed="1.4" data-scroll-position="top">u</span>
                        <span data-scroll data-scroll-speed="1.5" data-scroll-position="top">t</span>
                        <span data-scroll data-scroll-speed="1.6" data-scroll-position="top">e</span>
                        <span data-scroll data-scroll-speed="1.7" data-scroll-position="top">r</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
