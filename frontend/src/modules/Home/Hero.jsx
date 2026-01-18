import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import './Hero.scss';

const Hero = ({ onOpenProject }) => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="badge-dot"></span>
                    ACCELERATING DIGITAL INNOVATION
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    We build <span className="text-gradient">Software</span> that<br />
                    scales your future.
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    OffshoreDev is a premier technology partner specializing in custom
                    enterprise solutions, cloud architecture, and cutting-edge mobile applications.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Button variant="primary" onClick={onOpenProject}>Start Your Project →</Button>
                    <Button variant="outline" onClick={() => document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' })}>View Showcase</Button>
                </motion.div>

                {/* Feature Grid / Terminal Window */}
                <motion.div
                    className="terminal-window"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <div className="terminal-header">
                        <div className="terminal-controls">
                            <span className="control red"></span>
                            <span className="control yellow"></span>
                            <span className="control green"></span>
                        </div>
                        <div className="terminal-title">OFFSHOREDEV_V1.04_CORE</div>
                    </div>

                    <div className="hero-features">
                        <div className="feature-card">
                            <span className="feature-icon">{'</>'}</span>
                            <h3>Clean Architecture</h3>
                            <p>Scalable and maintainable codebases built with precision.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🛡️</span>
                            <h3>Ironclad Security</h3>
                            <p>Enterprise-grade protection for every data byte.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">⚡</span>
                            <h3>Rapid Deployment</h3>
                            <p>Agile cycles that bring your vision to life faster.</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
