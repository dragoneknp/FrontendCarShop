import React from "react";
import "./header.scss";
import avatar from "./avatar.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [menuActive, changeActive] = useState(false);
    const [popupOpened, changeOpened] = useState(false);
    const changeBodyOverflow = () => {
        document.body.classList.toggle("_lock");
    };
    const changeBodyOverflowAndActive = () => {
        changeBodyOverflow();
        changeActive(!menuActive);
    };
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo">LogoIpsum</div>
                    <div className="header__menu">
                        <div
                            className={`menu__icon ${
                                menuActive ? "_active" : "_disabled"
                            }`}
                            onClick={changeBodyOverflowAndActive}
                        >
                            <span></span>
                        </div>
                        <nav
                            className={`menu ${
                                menuActive ? "_active" : "_disabled"
                            }`}
                        >
                            <ul
                                className="menu__list"
                                onClick={
                                    menuActive
                                        ? changeBodyOverflowAndActive
                                        : undefined
                                }
                            >
                                <li className="menu__item">
                                    <Link to="/home" className="menu__link">
                                        Home
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/explore" className="menu__link">
                                        Explore
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/showroom" className="menu__link">
                                        Showroom
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link
                                        to="/creditSimulation"
                                        className="menu__link"
                                    >
                                        Credit simulation
                                    </Link>
                                </li>

                                <li
                                    className={`menu__item arrow ${
                                        popupOpened ? "_opened" : "_closed"
                                    }`}
                                    onClick={() => changeOpened(!popupOpened)}
                                >
                                    <span
                                        className="menu__link"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Page
                                    </span>
                                    <ul
                                        className={`menu__popup menu-popup ${
                                            popupOpened ? "_opened" : "_closed"
                                        }`}
                                    >
                                        <li className="menu-popup__item">
                                            <Link
                                                to="/home"
                                                className="menu__link"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="menu-popup__item">
                                            <Link
                                                to="/explore"
                                                className="menu__link"
                                            >
                                                Explore
                                            </Link>
                                        </li>
                                        <li className="menu-popup__item">
                                            <Link
                                                to="/showroom"
                                                className="menu__link"
                                            >
                                                Showroom
                                            </Link>
                                        </li>
                                        <li className="menu-popup__item">
                                            <Link
                                                to="/creditSimulation"
                                                className="menu__link"
                                            >
                                                Credit simulation
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__actions">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="header__avatar"
                        />
                        <button className="header__addNew redBtn">
                            Add Your Item
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
