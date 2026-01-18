import React from 'react';
import Button from '../../components/ui/Button';
import './Contact.scss';

const Contact = () => {
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
                        <form className="mini-form">
                            <div className="mf-row">
                                <div className="mf-group">
                                    <label>FULL NAME</label>
                                    <input type="text" placeholder="John Doe" />
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
                                <textarea placeholder="Tell us about your project..."></textarea>
                            </div>
                            <Button variant="primary" style={{ width: '100%' }}>Send Message</Button>
                        </form>
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
