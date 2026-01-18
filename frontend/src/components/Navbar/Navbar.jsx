import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import './Navbar.scss';

const Navbar = ({ onOpenProject }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="logo">
                        <div className="logo-box">OD</div>
                        <span className="logo-text">OffshoreDev</span>
                    </div>

                    {/* Desktop Links */}
                    <ul className="nav-links desktop-only">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#showcase">Past Projects</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>

                    {/* Action Button */}
                    <div className="nav-action desktop-only">
                        <Button variant="primary" onClick={onOpenProject}>Get a Quote</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
                        <FaBars />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
                            <FaTimes />
                        </button>
                        <ul className="mobile-links">
                            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                            <li><a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Past Projects</a></li>
                            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
                        </ul>
                        <div className="mobile-action">
                            <Button variant="primary" onClick={() => { setMobileMenuOpen(false); onOpenProject(); }}>
                                Get a Quote
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
