import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/index";
import Filme from "./pages/Filme/index";
import Favoritos from "./pages/Favoritos/index";

import Erro from "./pages/Erro/index";

import Header from "./Components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;