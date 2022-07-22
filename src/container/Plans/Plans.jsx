import React from "react";
import { Link } from "react-scroll";

import "./Plans.css";

const Plans = () => {
  return (
    <section id="planes" className="bg-gray-800 pb-14 px-6 sm:px-4 md:px-2 lg:px-0">
      <div className="container px-6 py-10 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl text-gray-100">
              Nuestros planes
            </h2>
            <p className="mt-4 text-gray-400">
              Accedé a cada uno de nuestros servicios a través de los planes que Workbox te ofrece.
            </p>
          </div>
        </div>

        <div className="grid gap-6 mt-8 lg:mt-12 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-700 border">
            <p className="text-lg font-medium text-gray-100">
              Pase por el día
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-100">
              $19{" "}
              <span className="text-base font-normaltext-gray-400">
                / Mes
              </span>
            </h4>
            <p className="mt-4 text-gray-300">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  All limited links
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Own analytics platform
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Chat support
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Optimize hashtags
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Unlimited users
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-opacity-80 focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-700 border">
            <p className="text-lg font-medium text-gray-100">
              Jornada completa
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-100">
              $39{" "}
              <span className="text-base font-normaltext-gray-400">
                / Mes
              </span>
            </h4>
            <p className="mt-4 text-gray-300">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  All limited links
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Own analytics platform
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Chat support
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Optimize hashtags
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Unlimited users
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-opacity-80 focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform bg-bgGold rounded-lg">
            <p className="text-lg font-medium text-gray-800">Media jornada</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800">
              $99{" "}
              <span className="text-base font-normal text-gray-600">/ Mes</span>
            </h4>
            <p className="mt-4 text-gray-500">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">All limited links</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">
                  Own analytics platform
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">Chat support</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">Optimize hashtags</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-700">Unlimited users</span>
              </div>
            </div>
            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-opacity-80 focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-700 border">
            <p className="text-lg font-medium text-gray-100">
              Oficina virtual
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-100">
              $10{" "}
              <span className="text-base font-normal text-gray-400">
                / Mes
              </span>
            </h4>
            <p className="mt-4 text-gray-300">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  All limited links
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Own analytics platform
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Chat support
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Optimize hashtags
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-oldGold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mx-4 text-gray-300">
                  Unlimited users
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-opacity-80 focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    // <section className="w-full py-32 h-screen bg-blackness" id="planes">
    //   <div className="max-w-6xl mx-auto text-left">
    //     <p className="text-white text-6xl">Nuestros planes</p>
    //     <hr className="border mt-4 mb-14 w-full mr-2 border-lightGray" />
    //     <div className="grid grid-cols-3 gap-4">
    //       <Fade bottom duration={2000}>
    //         <div className="flex flex-col">
    //           <div className="flex flex-col items-start bg-lightBlue p-10">
    //             <p className="text-blackness font-medium text-2xl mb-6">
    //               Jornada completa
    //             </p>
    //             <span className="text-blackness font-bold text-6xl mb-6">
    //               $10.000
    //               <span className="text-blackness font-light text-2xl opacity-70">
    //                 /mes
    //               </span>
    //             </span>
    //             <button className="btn btn-primary px-10 bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
    //               Reservar
    //             </button>
    //           </div>
    //           <div className="bg-white py-6 px-10">
    //             <p className="text-blackness text-xl mb-2 font-medium">
    //               Servicios incluidos:
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //           </div>
    //         </div>
    //       </Fade>
    //       <Fade bottom duration={3000}>
    //         <div className="flex flex-col -mt-6">
    //           <div className="flex flex-col items-start bg-lightBlue p-10">
    //             <p className="text-blackness font-medium text-2xl mb-6">
    //               Media jornada
    //             </p>
    //             <span className="text-blackness font-bold text-6xl mb-6">
    //               $10.000
    //               <span className="text-blackness font-light text-2xl opacity-70">
    //                 /mes
    //               </span>
    //             </span>
    //             <button className="btn btn-primary px-10 bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
    //               Reservar
    //             </button>
    //           </div>
    //           <div className="bg-white py-6 px-10">
    //             <p className="text-blackness text-xl mb-2 font-medium">
    //               Servicios incluidos:
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //           </div>
    //         </div>
    //       </Fade>
    //       <Fade bottom duration={2000}>
    //         <div className="flex flex-col">
    //           <div className="flex flex-col items-start bg-lightBlue p-10">
    //             <p className="text-blackness font-medium text-2xl mb-6">
    //               Oficina privada
    //             </p>
    //             <span className="text-blackness font-bold text-6xl mb-6">
    //               $10.000
    //               <span className="text-blackness font-light text-2xl opacity-70">
    //                 /mes
    //               </span>
    //             </span>
    //             <button className="btn btn-primary px-10 bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
    //               Reservar
    //             </button>
    //           </div>
    //           <div className="bg-white py-6 px-10">
    //             <p className="text-blackness text-xl mb-2 font-medium">
    //               Servicios incluidos:
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //             <p className="flex items-center text-lg text-blackness">
    //               <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
    //               Item
    //             </p>
    //           </div>
    //         </div>
    //       </Fade>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Plans;
