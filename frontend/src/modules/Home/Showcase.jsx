import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import './Showcase.scss';

const projects = [
    {
        title: 'FinTech Dashboard',
        tag: 'FINTECH',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        tags: ['Next.js', 'Python', 'AWS']
    },
    {
        title: 'LogiTrack AI',
        tag: 'LOGISTICS',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
        tags: ['React Native', 'TensorFlow', 'Go']
    }
];

const Showcase = () => {
    return (
        <section id="showcase" className="showcase-section">
            <div className="container">
                <div className="section-header center">
                    <h2>Showcase of <span className="text-gradient">Excellence</span></h2>
                    <p>Selected projects that demonstrate our commitment to quality, performance, and user-centric design.</p>
                </div>

                <div className="showcase-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-image">
                                <div className="project-badge">{project.tag}</div>
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay"></div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="ptagen">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="showcase-action">
                    <Button variant="outline">Explore All Case Studies ›</Button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
