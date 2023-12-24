import React from "react";
import { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [searchIsOpen, setSearchOpen] = useState(false);
    const [langIsOpen, setLangOpen] = useState(false);

    let menuRef = useRef(null);
    let langRef = useRef(null);

    useEffect(() => {
        let handler = (e:React.MouseEvent<HTMLElement>) => {
            if(!menuRef.current?.contains(e.target)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handler)
    });
    useEffect(() => {
        let handler = (e:React.MouseEvent<HTMLElement>) => {
            if(!langRef.current?.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handler)
    });

    return (

        <div className="navigation">
            <header>
                <div className="burger">
                    <img src="./img/header/burger-icon.png" alt="Menu" />
                </div>
                <div className="logo">
                    <Link to="/"><img src="./img/header/Logo.png" alt="Logo" /></Link>
                </div>
                <div className="search">
                    <div className="main-search" onClick={() => setSearchOpen(!searchIsOpen)}>
                        <div className="location-sign">
                            <img src="/img/header/location-sign.png" alt="" />
                        </div>
                        <span className="select-city">Select city</span>
                        <div className="drop-arrow">
                            <img src="/img/header/menu-drop-arrow.png" alt="" />
                        </div>
                    </div>
                    <div className={`dropdown-search ${searchIsOpen ? "active" : ""}`} ref={menuRef}>
                        <div className="select-city-drop">
                            <img src="/img/header/active-search.png" alt="" />
                            <input type="text" placeholder="Місто, область" />
                        </div>
                        <div className="turn-on-gps">
                            <img src="/img/header/gps.png" alt="" />
                            <span>Моє місцезнаходження</span>
                        </div>
                        <div className="previous-cities">
                            <span>Ви нещодавно дивилися</span>
                            <ul className="cities-list">
                                <li className="cities-list-el"><Link to="/">Харків</Link></li>
                                <li className="cities-list-el"><Link to="/">Київ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lang" onClick={() => setLangOpen(!langIsOpen)}>
                    <div className="earth-sign">
                        <img src="/img/header/earth.png" alt=""/>
                    </div>
                    <span className="selected-lang">UA</span>
                    <div className="drop-arrow">
                        <img src="/img/header/menu-drop-arrow.png" alt="" />
                    </div>
                </div>
                <div className={`dropdown-lang ${langIsOpen ? "active" : ""}`} ref={langRef}>
                    <ul className="lang-list">
                        <li className="lang-list-el"><Link to="/">EN</Link></li>
                        <li className="lang-list-el"><Link to="/">DE</Link></li>
                        <li className="lang-list-el"><Link to="/">NE</Link></li>
                        <li className="lang-list-el"><Link to="/">FR</Link></li>
                        <li className="lang-list-el"><Link to="/">FR</Link></li>
                        <li className="lang-list-el"><Link to="/">FR</Link></li>
                        <li className="lang-list-el"><Link to="/">FR</Link></li>
                    </ul>
                </div>
            </header>
            <div className="date-range"></div>
        </div>
    )
}