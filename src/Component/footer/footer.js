import React, { useState } from 'react';
import './footer.scss';
const Footer = () => {
    const [socialPopupOpened, changeSocialOpened] = useState(false);
    const [companyPopupOpened, changeCompanyOpened] = useState(false);
    return (
        
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__body footer-body">
                    <div className="footer-body__logo">LogoIpsum</div>
                    <div className="footer-body__description">OurStudio is a digital agency
                                                                UI / UX Design and Website
                                                                Development located in Ohio,
                                                                United States of America
                    </div>
                    <div className="footer-body__copyright">Copyright Dragonek</div>
                </div>
                <div className="footer__company">
                    <nav className="footer__menu footer-menu">
                    <div 
                    className={`footer-menu__label ${window.screen.width < 767 ? "arrow" : ""} ${socialPopupOpened ? "_opened" : "_closed"}`}
                    onClick={() => changeSocialOpened(!socialPopupOpened)}
                    >Company</div>
                        <ul className={`footer-menu__list ${socialPopupOpened ? "_opened" : "_closed"}`}>
                            <li className="footer-menu__item">
                                <a href="#home" className="footer-menu__link">Home</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#explore" className="footer-menu__link">Explore</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#showroom" className="footer-menu__link">Showroom</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#creditSimulation" className="footer-menu__link">Credit simulation</a>
                            </li>
                            <li className="footer-menu__item">
                                <a href="#contactUs" className="footer-menu__link">Contact us</a>
                            </li>
                            
                        </ul>
                    </nav>    
                </div>
                <div className="footer__social">
                    <div className="footer__menu">
                        
                        <nav className="footer__menu footer-menu">
                            <div
                            className={`footer-menu__label ${window.screen.width < 767 ? "arrow" : ""} ${companyPopupOpened ? "_opened" : "_closed"}`}
                            onClick={() => changeCompanyOpened(!companyPopupOpened)}
                            >Social</div>
                            <ul className={`footer-menu__list ${companyPopupOpened ? "_opened" : "_closed"}`}>
                                <li className="footer-menu__item">
                                    <a href="#home" className="footer-menu__link">Facebook</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#explore" className="footer-menu__link">Instagram</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#showroom" className="footer-menu__link">Youtube</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#creditSimulation" className="footer-menu__link">Twitter</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#contactUs" className="footer-menu__link">LinkedIn</a>
                                </li>
                                
                            </ul>
                        </nav>  
                    </div>
                </div>
                <div className="footer__contact">
                    <div className="footer__contactMenu">
                        <nav className="contactMenu">
                            <li className="contactMenu__item">
                                <address id="address">221 B Santa Monica, Los Angeles</address>
                            </li>
                            <li className="contactMenu__item">
                                <a id="phoneNumber" href="tel:(+1) 923 2341 22" className="contactMenu__link">(+1) 923 2341 22</a>
                            </li>
                            <li className="contactMenu__item">
                                <a id="mail" href="mailto:contact@tanahairstudio.com" className="contactMenu__link">contact@tanahairstudio.com</a>
                            </li>
                        </nav>
                    </div>
                
                </div>
            </div>
        </footer>
)};
export default Footer;
