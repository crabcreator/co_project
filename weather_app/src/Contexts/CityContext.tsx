import React, { createContext, useState, useContext, JSX } from "react";

export const cities = [
      "Харків",
      "Дніпро",
      "Київ",
      "Одеса",
      "Маріуполь",
      "Житомир",
      "Полтава"
];

interface ICity {
      city: string, 
      setCity: (id: number) => void,
}

export const CityContext = createContext<ICity>({city: window.localStorage.getItem("City") || "", setCity: (id) => {},});

export function CityContextProvider(props:{children:JSX.Element}) {
      const [currentCity, setCurrentCity] = useState<string>(useContext(CityContext).city);
      return (
            <CityContext.Provider value={{city: currentCity, setCity: function(id:number) {
                  if(id) {
                        setCurrentCity(cities[id]);
                        window.localStorage.setItem("City", cities[id]);
                  }
            }}}>
                  {props.children}
            </CityContext.Provider>
      )
}