import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    details: formData.message,
                    subject: 'Contact Form Inquiry'
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <footer id="about" className="contact-footer">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="logo-small">OD</div>
                        <h2>Ready to start your<br /><span className="text-blue">Success Story?</span></h2>
                        <p>Whether you're a startup or an enterprise, OffshoreDev provides the strategic engineering required to compete in a digital-first world.</p>

                        <div className="contact-details">
                            <div className="cd-item">
                                <span className="cd-label">EMAIL US</span>
                                <a href="mailto:hello@offshoredev.io">hello@offshoredev.io</a>
                            </div>
                            <div className="cd-item">
                                <span className="cd-label">CALL US</span>
                                <a href="tel:+15550008324">+1 (555) 000-TECH</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
                                <h3 style={{ color: '#3B82F6', marginBottom: '1rem' }}>Message Sent!</h3>
                                <p>Thank you for reaching out.</p>
                            </div>
                        ) : (
                            <form className="mini-form" onSubmit={handleSubmit}>
                                <div className="mf-row">
                                    <div className="mf-group">
                                        <label>FULL NAME</label>
                                        <input name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="mf-group">
                                        <label>COMPANY</label>
                                        <input type="text" placeholder="Inc." />
                                    </div>
                                </div>
                                <div className="mf-group">
                                    <label>YOUR INTEREST</label>
                                    <input type="text" placeholder="Web Development" />
                                </div>
                                <div className="mf-group">
                                    <label>MESSAGE</label>
                                    <textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div style={{ marginTop: '1.5rem' }}>
                                    <Button variant="primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <span>OD OffshoreDev</span>
                    </div>
                    <p className="copyright">© 2025 OffshoreDev Ltd. All architectural rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
