import React, {useContext, useState } from 'react'
import { CityContext, cities } from './Contexts/CityContext.ts';
import { LangContext, langs } from './Contexts/LangContext.ts';
import {Outlet} from "react-router"
import "./App.css";
import Header from "./Components/Header/Header.tsx"
import Footer from "./Components/Footer/Footer.tsx"

export default function App() {
  const [currentCity, setCurrentCity] = useState<string | null>(useContext(CityContext));
  const [currentLang, setCurrentLang] = useState<string | null>(useContext(LangContext));

  const updateCityContext = (id:string) => {
    if(id) {
      setCurrentCity(cities[id]);
      window.localStorage.setItem("CurrentCity", cities[id]);
    }
  };
  const updateLangContext = (id:string) => {
    if(id) {
      setCurrentLang(langs[id]);
      window.localStorage.setItem("Lang", langs[id]);
    }
  }

  return (
    <CityContext.Provider value={currentCity}>
      <LangContext.Provider value={currentLang}>
        <div className="App">
          <Header updateCityContext={updateCityContext} updateLangContext={updateLangContext} />
          <Outlet />
          <Footer />
        </div>
      </LangContext.Provider>
    </CityContext.Provider>
  );
}
