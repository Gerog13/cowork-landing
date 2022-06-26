import React, { useState, useEffect } from "react";

import Logo from "../../assets/images/white-logo.png";
import food from "../../assets/images/food.svg";
import cowork from "../../assets/images/coworking.svg";
import worktime from "../../assets/images/worktime.svg";
import parking from "../../assets/images/parking.svg";
import atm from "../../assets/images/atm.svg";
import highway from "../../assets/images/highway.svg";
import market from "../../assets/images/market.svg";
import security from "../../assets/images/security.svg";

import { Link } from "react-scroll";
import Typical from "react-typical";
import TextTransition, { presets } from "react-text-transition";

const Main = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "crecer",
    "trabajar",
    "conocer",
    "ayudar",
    "aprender",
    "cooperar",
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section>
      {/* Nav */}
      <nav className="navbar px-1 md:px-10 bg-neonBlue">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-platinum"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="servicios" spy={true} smooth={true} duration={100}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="planes" spy={true} smooth={true} duration={100}>
                  Planes
                </Link>
              </li>
              <li>
                <Link to="galeria" spy={true} smooth={true} duration={100}>
                  Galería
                </Link>
              </li>
              <li>
                <Link to="contacto" spy={true} smooth={true} duration={100}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={Logo} alt="Workbox logo" height={200} width={200} />
          </a>
        </div>
        <div className="navbar-center w-1/3 hidden lg:flex">
          <ul className="w-full flex justify-around font-semibold text-lg">
            <li className="text-gray-100 text-lg cursor-pointer border-b-2 border-transparent hover:border-white hover:text-white  hover:shadow-xl transition-all ease duration-150">
              <Link to="servicios" spy={true} smooth={true} duration={100}>
                Servicios
              </Link>
            </li>
            <li className="text-gray-100 text-lg cursor-pointer border-b-2 border-transparent hover:border-white hover:text-white hover:shadow-xl transition-all ease duration-150">
              <Link to="planes" spy={true} smooth={true} duration={100}>
                Planes
              </Link>
            </li>
            <li className="text-gray-100 text-lg cursor-pointer border-b-2 border-transparent hover:border-white hover:text-white hover:shadow-xl transition-all ease duration-150">
              <Link to="galeria" spy={true} smooth={true} duration={100}>
                Galería
              </Link>
            </li>
            <li className="text-gray-100 text-lg cursor-pointer border-b-2 border-transparent hover:border-white hover:text-white hover:shadow-xl transition-all ease duration-150">
              <Link to="contacto" spy={true} smooth={true} duration={100}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn btn-sm sm:btn-md btn-primary mr-4"
            to="contacto"
            spy={true}
            smooth={true}
            duration={100}
          >
            ¡Quiero mi Lugar!
          </Link>
        </div>
      </nav>

      {/* Main section */}
      <section className="pt-8 md:pb-10 flex flex-col lg:flex-row lg:px-14 justify-around md:justify-center md:h-screen w-full items-center xl:-mt-20 bg-neonBlue">
        <img
          src={cowork}
          alt="Tu espacio de conexion"
          className="mr-10 w-72 sm:w-96 md:w-img"
        />
        <div className=" xl:ml-10 flex flex-col h-2/5 justify-center md:items-center">
          <div className="mt-6 md:mt-14">
            <h1 className="text-white text-3xl sm:text-5xl xl:text-6xl font-bold mb-1">
              <Typical
                steps={["Bienvenido a Workbox", 1000]}
                loop={1}
                wrapper="p"
              />
            </h1>
            <div className="flex text-xl md:text-4xl text-black">
              Tu espacio de conexión para
              <TextTransition
                className="ml-1 md:ml-2 font-semibold"
                springConfig={presets.wobbly}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-6 lg:px-0 mt-4 sm:mt-6 md:mt-10 pb-10">
            <div className="flex items-center rounded-xl shadow-sm px-6 py-4 bg-white hover:opacity-95 hover:shadow-xl transition-all ease duration-100">
              <img src={parking} alt="" width={40} height={40} />
              <p className="ml-2 text-gray-900 font-medium">Gran estacionamiento</p>
            </div>
            <div className="flex items-center rounded-xl shadow-sm px-6 py-4 bg-white hover:opacity-95 hover:shadow-xl transition-all ease duration-100">
              <img src={security} alt="" width={40} height={40} />
              <p className="ml-2 text-gray-900 font-medium ">Seguridad 24/7</p>
            </div>
            <div className="flex items-center rounded-xl shadow-sm px-6 py-4 bg-white hover:opacity-95 hover:shadow-xl transition-all ease duration-100">
              <img src={atm} alt="" width={40} height={40} />
              <p className="ml-2 text-gray-900 font-medium ">Cajeros cercanos</p>
            </div>
            <div className="flex items-center rounded-xl shadow-sm px-6 py-4 bg-white hover:opacity-95 hover:shadow-xl transition-all ease duration-100">
              <img src={highway} alt="" width={40} height={40} />
              <p className="ml-2 text-gray-900 font-medium ">Fácil acceso</p>
            </div>
            <div className="flex items-center rounded-xl shadow-sm px-6 py-4 bg-white hover:opacity-95 hover:shadow-xl transition-all ease duration-100">
              <img src={market} alt="" width={40} height={40} />
              <p className="ml-2 text-gray-900 font-medium ">Todo tipo de negocios</p>
            </div>
            <div className="flex items-center rounded-xl shadow-sm px-6 py-4 bg-white hover:opacity-95 hover:shadow-xl transition-all ease duration-100">
              <img src={food} alt="" width={40} height={40} />
              <p className="ml-2 text-gray-900 font-medium ">Patio de comidas</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Main;
