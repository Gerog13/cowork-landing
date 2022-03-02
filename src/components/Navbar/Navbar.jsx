import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="absolute z-50 w-full flex justify-between items-center px-4 py-6 md:px-6 md:py-8">
        <h1 className="text-2xl sm:text-3xl text-white font-semibold font-serif">WORKBOX</h1>
        <ul className="w-1/2 lg:w-1/3 items-center justify-evenly text-lg text-white font-semibold hidden md:flex">
          <li className="hover:text-green-300 transition-all duration-200 ease-in">
            <a href="#Servicios">Servicios</a>
          </li>
          <li className="hover:text-green-300 transition-all duration-200 ease-in">
            <a href="#Planes">Planes</a>
          </li>
          <li className="hover:text-green-300 transition-all duration-200 ease-in">
            <a href="#Galeria">Galería</a>
          </li>
          <li className="hover:text-green-300 transition-all duration-200 ease-in">
            <a href="#Contacto">Contacto</a>
          </li>
        </ul>
        <div className="md:hidden">
          <Hamburger
            toggled={toggleMenu}
            toggle={setToggleMenu}
            duration={0.7}
            color="#fff"
          />
        </div>
      </nav>
      {toggleMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen z-10 bg-slate-800 transition-all ease duration-700 slide-bottom">
          <ul className="mt-40 w-full flex-col text-center text-white text-2xl font-mono">
            <li className="m-24">
              <a href="#Servicios">Servicios</a>
            </li>
            <li className="m-24">
              <a href="#Planes">Planes</a>
            </li>
            <li className="m-24">
              <a href="#Galeria">Galería</a>
            </li>
            <li className="m-24">
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
