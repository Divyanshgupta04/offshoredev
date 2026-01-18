import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';
import './Modal.scss';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-backdrop" onClick={onClose}>
                    <motion.div
                        className="modal-container"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <div className="modal-header">
                            <h3>{title}</h3>
                            <button className="close-btn" onClick={onClose}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="modal-content">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export const InquiryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', details: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ name: '', email: '', details: '' });
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Start Your Project">
            {status === 'success' ? (
                <div className="success-message">
                    <h3>Message Sent! 🚀</h3>
                    <p>We'll get back to you shortly.</p>
                </div>
            ) : (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Company</label>
                        <input type="text" placeholder="Acme Inc." />
                    </div>
                    <div className="input-group full">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group full">
                        <label>Project Details</label>
                        <textarea
                            name="details"
                            placeholder="Tell us about what you want to build..."
                            rows="4"
                            value={formData.details}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-actions">
                        <Button variant="primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : (status === 'error' ? 'Failed. Try Again.' : 'Send Message')}
                        </Button>
                    </div>
                </form>
            )}
        </Modal>
    );
};

export default Modal;
