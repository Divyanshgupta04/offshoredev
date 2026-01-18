import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaServer, FaBrain, FaLayerGroup } from 'react-icons/fa'; // Assuming react-icons is available
import './Services.scss';

const services = [
    {
        icon: <FaLayerGroup />,
        title: 'Custom Web Apps',
        desc: 'React, Angular, Vue, and Next.js ecosystems built for high performance and SEO optimization.',
        tags: ['PWA Support', 'Micro-frontends']
    },
    {
        icon: <FaMobileAlt />,
        title: 'Mobile Excellence',
        desc: 'Native iOS/Android and Cross-platform solutions using Flutter and React Native.',
        tags: ['Seamless UX/UI', 'App Store Optimization']
    },
    {
        icon: <FaServer />,
        title: 'Backend & DevOps',
        desc: 'Robust server-side logic with Python, Go, Node.js and automated AWS/Azure pipelines.',
        tags: ['Serverless Tech', 'Kubernetes Ops']
    },
    {
        icon: <FaBrain />,
        title: 'AI & Big Data',
        desc: 'Integration of Generative AI, LLMs, and complex data visualization for business intelligence.',
        tags: ['Predictive Analytics', 'NLP Integration']
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Our Specialized <span className="text-gradient">Expertise</span></h2>
                    <p>We master the technologies that drive the modern market. From AI integration to blockchain architecture, we deliver excellence across all domains.</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon-box">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <ul className="service-tags">
                                {service.tags.map((tag, i) => (
                                    <li key={i}>✓ {tag}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
