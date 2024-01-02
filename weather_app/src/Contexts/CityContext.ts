import { createContext } from "react";

export const cities = [
      "Харків",
      "Дніпро",
      "Київ",
      "Одеса",
      "Маріуполь",
      "Житомир",
      "Полтава"
];
export const CityContext = createContext<string | null>(
      window.localStorage.getItem("CurrentCity") ?
      window.localStorage.getItem("CurrentCity") :
      ""
);