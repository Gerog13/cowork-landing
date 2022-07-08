import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Logo from "../../assets/images/white-logo.png";
import cowork from "../../assets/images/workspace.png";
import { FaParking, FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { GiRoad } from "react-icons/gi";
import { MdOutlineLocalDining, MdLocalOffer } from "react-icons/md";

import { Link } from "react-scroll";
import TextTransition, { presets } from "react-text-transition";
import { Roll } from "react-reveal";

const Main = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "crecer.",
    "trabajar.",
    "conocer.",
    "ayudar.",
    "aprender.",
    "cooperar.",
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
      <nav className="navbar justify-between px-1 pt-4 md:px-10 bg-blackness">
        <div>
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-oldGold"
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
        <div className="navbar-center w-1/3 2xl:w-1/4 hidden lg:flex">
          <ul className="w-full flex justify-between font-normal">
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-lightGray hover:text-lightGray  hover:shadow-xl transition-all ease duration-150">
              <Link to="servicios" spy={true} smooth={true} duration={100}>
                Servicios
              </Link>
            </li>
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-lightGray hover:text-lightGray hover:shadow-xl transition-all ease duration-150">
              <Link to="planes" spy={true} smooth={true} duration={100}>
                Planes
              </Link>
            </li>
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-lightGray hover:text-lightGray hover:shadow-xl transition-all ease duration-150">
              <Link to="galeria" spy={true} smooth={true} duration={100}>
                Galería
              </Link>
            </li>
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-lightGray hover:text-lightGray hover:shadow-xl transition-all ease duration-150">
              <Link to="contacto" spy={true} smooth={true} duration={100}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-end">
          <Link
            className="btn btn-sm md:btn-md btn-primary mr-1 sm:mr-4 lg:mr-0 rounded-none text-white bg-lightGray border-lightGray hover:bg-lightGray hover:border-lightGray hover:shadow-xl hover:opacity-90"
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
      <section className="w-full h-screen pt-12 bg-blackness">
        <div className="flex mx-auto justify-between max-w-6xl ">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl sm:text-5xl xl:text-9xl font-semibold">
              <span className="text-7xl font-extralight">Bienvenido a </span>
              <br />
              Workbox
            </h1>
            <hr className="border mt-10 mb-6 w-1/2 border-grayness" />
            <Slide left duration={2000}>
              <div className="flex flex-col items-center mb-6 sm:flex-row sm:items-start text-lg sm:text-xl md:text-2xl text-grayness font-extralight">
                Tu espacio de conexión para
                <TextTransition
                  className="sm:ml-1 md:ml-2 font-semibold text-lightGray"
                  springConfig={presets.wobbly}
                >
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </div>
            </Slide>
            <Fade left cascade>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-b border-r p-2 border-grayness flex items-center">
                  <FaParking className="fill-white w-10 h-10" />
                  <p className="break-words ml-2 text-white font-light">
                    Amplio estacionamiento
                  </p>
                </div>
                <div className="border-b border-r p-2 border-grayness flex items-center">
                  <FaMoneyBillWave className="fill-white w-10 h-10" />
                  <p className="break-words ml-2 text-white font-light">
                    Cajeros cercanos
                  </p>
                </div>
                <div className="border-b border-r p-2 border-grayness flex items-center">
                  <AiOutlineSafety className="fill-white w-10 h-10" />
                  <p className="break-words ml-2 text-white font-light">
                    Seguridad 24/7
                  </p>
                </div>
                <div className="border-b border-r p-2 border-grayness flex items-center">
                  <GiRoad className="fill-white w-10 h-10" />
                  <p className="break-words ml-2 text-white font-light">
                    Fácil acceso
                  </p>
                </div>
                <div className="border-b border-r p-2 border-grayness flex items-center">
                  <MdOutlineLocalDining className="fill-white w-10 h-10" />
                  <p className="break-words ml-2 text-white font-light">
                    Patio de comidas
                  </p>
                </div>
                <div className="border-b border-r p-2 border-grayness flex items-center">
                  <MdLocalOffer className="fill-white w-10 h-10" />
                  <p className="break-words ml-2 text-white font-light">
                    Todo tipo de negocios
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom duration={2000}>
            <div className="w-full">
              <img
                src={cowork}
                alt="Tu espacio de conexion"
                className="w-64 md:w-full h-full object-cover lg:ml-10"
              />
            </div>
          </Fade>
        </div>
      </section>
    </section>
  );
};

export default Main;
