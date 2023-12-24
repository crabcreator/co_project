import React from 'react'
import {Outlet} from "react-router"
import "./App.css";
import Header from "./Components/Header/Header.tsx"
import Footer from "./Components/Footer/Footer.tsx"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
