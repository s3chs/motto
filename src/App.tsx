import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './sass/main.sass';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Menu/>
            <Gallery/>
            <Footer/>
        </>
    );
}

export default App;
