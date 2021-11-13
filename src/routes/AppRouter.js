import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import LogoCarrito from "../components/LogoCarrito";
import { Navbar } from "../components/Navbar";
import { Bebidas } from "../components/Bebidas";
import { Tamales } from "../components/Tamales";
import { Guajolotas } from "../components/Guajolotas";
import Busqueda from "../components/Busqueda";
import GlobalStyle from "../globalstyles/Globalstyle";


export default function AppRouter() {
  return (
    <div>
      <Logo />
      <LogoCarrito />
      <Banner />
      <Busqueda />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/Guajolotas" element={<Guajolotas />} />
          <Route exact path="/Bebidas" element={<Bebidas />} />
          <Route exact path="/Tamales" element={<Tamales />} />
        </Routes>
      </BrowserRouter>


      <GlobalStyle/>
    </div>
  );
}
