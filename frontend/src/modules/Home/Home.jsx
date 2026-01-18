import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './Hero';
import Services from './Services';
import Showcase from './Showcase';
import Contact from './Contact';
import './Home.scss';

const Home = ({ onOpenProject }) => {
    return (
        <div className="home-container">
            <Navbar onOpenProject={onOpenProject} />
            <Hero onOpenProject={onOpenProject} />
            <Services />
            <Showcase />
            <Contact />
        </div>
    );
};

export default Home;
