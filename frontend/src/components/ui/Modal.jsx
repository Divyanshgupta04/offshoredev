import React, { useEffect } from 'react';
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
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Start Your Project">
            <form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent! (Demo)'); onClose(); }}>
                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                </div>
                <div className="input-group">
                    <label>Company</label>
                    <input type="text" placeholder="Acme Inc." />
                </div>
                <div className="input-group full">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="input-group full">
                    <label>Project Details</label>
                    <textarea placeholder="Tell us about what you want to build..." rows="4"></textarea>
                </div>
                <div className="form-actions">
                    <Button variant="primary" style={{ width: '100%' }}>Send Message</Button>
                </div>
            </form>
        </Modal>
    );
};

export default Modal;
