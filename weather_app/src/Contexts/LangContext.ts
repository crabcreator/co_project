import { createContext } from "react";

export const langs = [
   "UA", "EN", "DE", "NE", "FR"
]

export const LangContext = createContext<string | null>(
   window.localStorage.getItem("Lang") ? 
   window.localStorage.getItem("Lang") : 
   "UA"
);