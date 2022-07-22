import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Logo from "../../assets/images/whitelogo.png";
import cowork from "../../assets/images/workbox6.jpeg";
import { FaParking, FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { GiRoad } from "react-icons/gi";
import { MdOutlineLocalDining, MdLocalOffer } from "react-icons/md";

import { Link } from "react-scroll";
import TextTransition, { presets } from "react-text-transition";
import { Roll } from "react-reveal";

const Main = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  // const [index, setIndex] = useState(0);
  // const TEXTS = [
  //   "crecer.",
  //   "trabajar.",
  //   "conocer.",
  //   "ayudar.",
  //   "aprender.",
  //   "cooperar.",
  // ];

  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <header className="bg-gray-800 pb-10">
      <nav className="border-b border-gray-700">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-300"
                href="/"
              >
                <img src={Logo} alt="Workbox logo" height={40} width={40} />
              </a>
            </div>
            {/* Mobile button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setToggleMenu((prevState) => !prevState)}
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={"items-center lg:flex" + (toggleMenu ? " hidden" : "")}
          >
            <div className="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:-px-8">
              <Link
                className="block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-oldGold text-gray-100 lg:mx-8 hover:text-oldGold transition-all ease duration-150"
                to="servicios"
                spy={true}
                smooth={true}
                duration={100}
              >
                Servicios
              </Link>

              <Link
                className="block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-oldGold text-gray-100 lg:mx-8 hover:text-oldGold transition-all ease duration-150"
                to="planes"
                spy={true}
                smooth={true}
                duration={100}
              >
                Planes
              </Link>
              <Link
                className="block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-oldGold text-gray-100 lg:mx-8 hover:text-oldGold transition-all ease duration-150"
                to="contacto"
                spy={true}
                smooth={true}
                duration={100}
              >
                Contacto
              </Link>
            </div>
          </div>
          <Link
            className={
              "cursor-pointer flex items-center justify-center uppercase px-5 py-3 text-sm mt-4 lg:mt-0 font-semibold text-center text-white transition-all ease duration-300 rounded-lg transform bg-oldGold border-2 border-transparent hover:border-oldGold hover:bg-transparent hover:text-oldGold hover:shadow-sm hover:opacity-90 lg:block" +
              (toggleMenu ? " hidden" : "")
            }
            to="contacto"
            spy={true}
            smooth={true}
            duration={100}
          >
            Reserva tu lugar
          </Link>
        </div>
      </nav>

      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[40rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl text-white font-medium tracking-widetext-white lg:text-5xl">
              Bienvenido a Workbox
            </h1>
            <p className="mt-2 text-gray-300 lg:text-lg">Espacio de conexión</p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center -px-3 text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Amplio estacionamiento</span>
              </div>

              <div className="flex items-center -px-3 text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Seguridad todo el día</span>
              </div>

              <div className="flex items-center -px-3 text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Fácil acceso</span>
              </div>

              <div className="flex items-center-px-3 text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Cajeros cercanos</span>
              </div>

              <div className="flex items-center -px-3 text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Patio de comidas</span>
              </div>

              <div className="flex items-center -px-3 text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Todo tipo de negocios</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-[ ] lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={cowork}
            alt="Workbox espacio de conexión"
          />
        </div>
      </div>
    </header>

    /* <section>
      <nav className="navbar justify-between px-1 py-4 md:px-16 bg-blackness">
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
                <Link to="contacto" spy={true} smooth={true} duration={100}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={Logo} alt="Workbox logo" height={50} width={50} />
          </a>
        </div>
        <div className="navbar-center w-1/3 2xl:w-1/4 hidden lg:flex">
          <ul className="w-full flex justify-around font-normal">
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-oldGold hover:text-oldGold  hover:shadow-xl transition-all ease duration-300">
              <Link to="servicios" spy={true} smooth={true} duration={100}>
                Servicios
              </Link>
            </li>
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-oldGold hover:text-oldGold hover:shadow-xl transition-all ease duration-300">
              <Link to="planes" spy={true} smooth={true} duration={100}>
                Planes
              </Link>
            </li>
            <li className="tracking-wide text-white text-lg cursor-pointer border-b-2 border-transparent hover:border-oldGold hover:text-oldGold hover:shadow-xl transition-all ease duration-300">
              <Link to="contacto" spy={true} smooth={true} duration={100}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-end">
          <Link
            className="btn btn-sm md:btn-md btn-primary mr-1 sm:mr-4 lg:mr-0 text-white bg-oldGold border-oldGold hover:bg-oldGold hover:border-oldGold hover:shadow-xl hover:opacity-90"
            to="contacto"
            spy={true}
            smooth={true}
            duration={100}
          >
            ¡Quiero mi Lugar!
          </Link>
        </div>
      </nav>

      <section className="w-full lg:h-screen bg-blackness">
        <div className="flex mx-auto w-full h-full ">
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
            <div className="max-w-xl lg:-mt-40">
              <h1 className="text-2xl sm:text-5xl xl:text-8xl font-normal text-white">
                Workbox
              </h1>
              <hr className="border my-4 w-2/5 border-oldGold" />
              <p className="text-xl font-light text-grayness">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                reprehenderit modi voluptatibus illum quam doloribus earum
                debitis est qui sint?
              </p>
              <button className="btn  btn-primary mt-4 text-oldGold bg-white ">Conocer más</button>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img
              src={cowork}
              alt="Tu espacio de conexion"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
      </section>
    </section> */
  );
};

export default Main;
