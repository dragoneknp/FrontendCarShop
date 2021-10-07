import React from 'react';
import './header.scss';
import avatar from "./avatar.svg";
import { useState } from 'react';
const Header = () => {
    const [menuActive, changeActive] = useState(false);
    const [popupOpened, changeOpened] = useState(false);
    const changeBodyOverflow = () => {
        document.body.classList.toggle("_lock");
    }
    const changeBodyOverflowAndActive = () => {
        changeBodyOverflow();
        changeActive(!menuActive);
    }
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo">
                        LogoIpsum
                    </div>
                    <div className="header__menu">
                        <div className={`menu__icon ${menuActive ? "_active" : "_disabled"}`} onClick={changeBodyOverflowAndActive}>
                            <span></span>
                        </div>
                        <nav className={`menu ${menuActive ? "_active" : "_disabled"}`}>
                            <ul className="menu__list" onClick={menuActive ? changeBodyOverflowAndActive : null}>
                                <li className="menu__item">
                                    <a href="#home" className="menu__link">Home</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#explore" className="menu__link">Explore</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#showroom" className="menu__link">Showroom</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#creditSimulation" className="menu__link">Credit simulation</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#contactUs" className="menu__link">Contact us</a>
                                </li>
                                <li className={`menu__item arrow ${popupOpened ? "_opened" : "_closed"}`} onClick={() => changeOpened(!popupOpened)}>
                                    <a href="#page" className="menu__link">Page</a>
                                    <ul className={`menu__popup menu-popup ${popupOpened ? "_opened" : "_closed"}`}>
                                            <li className="menu-popup__item">First Page</li>
                                            <li className="menu-popup__item">page2</li>
                                            <li className="menu-popup__item">page3</li>
                                            <li className="menu-popup__item">page4</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__actions">
                        <img src={avatar} alt="avatar" className="header__avatar" />
                        <button className="header__addNew redBtn">Add Your Item</button>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;