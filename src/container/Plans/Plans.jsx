import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

import "./Plans.css";

const Plans = () => {
  return (
    <section className="w-full py-32 h-screen bg-blackness" id="planes">
      <div className="max-w-6xl mx-auto text-left">
        <p className="text-white text-6xl">Nuestros planes</p>
        <hr className="border mt-4 mb-14 w-full mr-2 border-lightGray" />
        <div className="grid grid-cols-3 gap-4">
          <Fade bottom duration={2000}>
            <div className="flex flex-col">
              <div className="flex flex-col items-start bg-lightBlue p-10">
                <p className="text-blackness font-medium text-2xl mb-6">
                  Jornada completa
                </p>
                <span className="text-blackness font-bold text-6xl mb-6">
                  $10.000
                  <span className="text-blackness font-light text-2xl opacity-70">
                    /mes
                  </span>
                </span>
                <button className="btn btn-primary px-10 bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
                  Reservar
                </button>
              </div>
              <div className="bg-white py-6 px-10">
                <p className="text-blackness text-xl mb-2 font-medium">
                  Servicios incluidos:
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={3000}>
            <div className="flex flex-col -mt-6">
              <div className="flex flex-col items-start bg-lightBlue p-10">
                <p className="text-blackness font-medium text-2xl mb-6">
                  Media jornada
                </p>
                <span className="text-blackness font-bold text-6xl mb-6">
                  $10.000
                  <span className="text-blackness font-light text-2xl opacity-70">
                    /mes
                  </span>
                </span>
                <button className="btn btn-primary px-10 bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
                  Reservar
                </button>
              </div>
              <div className="bg-white py-6 px-10">
                <p className="text-blackness text-xl mb-2 font-medium">
                  Servicios incluidos:
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={2000}>
            <div className="flex flex-col">
              <div className="flex flex-col items-start bg-lightBlue p-10">
                <p className="text-blackness font-medium text-2xl mb-6">
                  Oficina privada
                </p>
                <span className="text-blackness font-bold text-6xl mb-6">
                  $10.000
                  <span className="text-blackness font-light text-2xl opacity-70">
                    /mes
                  </span>
                </span>
                <button className="btn btn-primary px-10 bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
                  Reservar
                </button>
              </div>
              <div className="bg-white py-6 px-10">
                <p className="text-blackness text-xl mb-2 font-medium">
                  Servicios incluidos:
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
                <p className="flex items-center text-lg text-blackness">
                  <BsCheck2Circle className="fill-lightGray font-bold mr-2" />{" "}
                  Item
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Plans;
