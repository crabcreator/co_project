import React, {useContext, useState } from 'react'
import { CityContextProvider } from './Contexts/CityContext';
import { LangContextProvider } from './Contexts/LangContext';
import {Outlet} from "react-router"
import "./App.css";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

export default function App() {
  // const [currentCity, setCurrentCity] = useState<string>(useContext(CityContext));
  // const [currentLang, setCurrentLang] = useState<string>(useContext(LangContext));

  // const updateLangContext = (id:string) => {
  //   if(id) {
  //     setCurrentLang(langs[id]);
  //     window.localStorage.setItem("Lang", langs[id]);
  //   }
  // }

  return (
    <CityContextProvider>
      <LangContextProvider>
        <div className="App">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </LangContextProvider>
    </CityContextProvider>
  );
}
