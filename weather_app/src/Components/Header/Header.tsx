import React, { useState, useEffect, useRef, useContext } from "react";
import { CityContext, cities } from "../../Contexts/CityContext";
import { LangContext, langs } from "../../Contexts/LangContext";
import {Link} from "react-router-dom";
import "./Header.css";

export default function Header() {
    const {city, setCity} = useContext(CityContext);
    const {lang, setLang} = useContext(LangContext)

    const [searchIsOpen, setSearchOpen] = useState(false);
    const [langIsOpen, setLangOpen] = useState(false);

    let menuRef = useRef<HTMLDivElement>(null);
    let langRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        let handler = (e:React.MouseEvent<HTMLElement> & {target: HTMLElement}) => {
            if(!menuRef.current?.contains(e.target)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handler as any);
    });
    useEffect(() => {
        let handler = (e:React.MouseEvent<HTMLElement> & {target: HTMLElement}) => {
            if(!langRef.current?.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handler as any);
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
                        <span className="select-city">{city==="" ? "Вибрати місто" : city}</span>
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
                                {cities.map((el, index) => (
                                    <li key={el} className="cities-list-el"><button onClick={() => {
                                        setCity(index);
                                        setSearchOpen(false);
                                    }}>{el}</button></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lang" onClick={() => setLangOpen(!langIsOpen)}>
                    <div className="earth-sign">
                        <img src="/img/header/earth.png" alt=""/>
                    </div>
                    <span className="selected-lang">{lang}</span>
                    <div className="drop-arrow">
                        <img src="/img/header/menu-drop-arrow.png" alt="" />
                    </div>
                </div>
                <div className={`dropdown-lang ${langIsOpen ? "active" : ""}`} ref={langRef}>
                    <ul className="lang-list">
                        {langs.map((el, index) => (
                            <li key={el} className="lang-list-el"><button onClick={() => {
                                setLang(index);
                                setLangOpen(false);
                            }}>{el}</button></li>
                        ))}
                    </ul>
                </div>
            </header>
            <div className="date-range"></div>
        </div>
    );
}