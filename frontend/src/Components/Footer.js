import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer py-4 bg-light border-top">
            <div className="container">
                {/* Separation Line */}
                <hr className="footer-line" />

                {/* Footer Content */}
                <div className="row footer-content">
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <span className="text-muted">© 2024 Tasty Travel, Inc</span>
                    </div>
                    <div className="col-12 col-md-4 text-center my-2 my-md-0">
                        <div>
                            <Link to="/about" className="me-3">About Us</Link>
                            <Link to="/contact" className="me-3">Contact</Link>
                            <Link to="/ReviewForm" className="me-3">Feedback</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-end">
                        <div>
                            <Link to="https://facebook.com" className="me-2" aria-label="Facebook">
                                <i className="ri-facebook-fill"></i>
                            </Link>
                            <Link to="https://twitter.com" className="me-2" aria-label="Twitter">
                                <i className="ri-twitter-fill"></i>
                            </Link>
                            <Link to="https://www.instagram.com/traveltastyy/" className="me-2" aria-label="Instagram">
                                <i className="ri-instagram-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
