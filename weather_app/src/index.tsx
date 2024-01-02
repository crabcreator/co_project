import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./index.css";
import App from "./App.tsx";
import Main from "./Components/Main/Main.tsx"

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />
        </Route>
    </Routes>
    </BrowserRouter>

);
