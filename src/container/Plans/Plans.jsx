import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Link } from "react-scroll";

import "./Plans.css";

import dots from "../../assets/images/dots.svg";

const Button = () => {
  return (
    <Link
      to="contacto"
      spy={true}
      smooth={true}
      duration={100}
      className="cssbuttons-io-button cursor-pointer"
    >
      {" "}
      Reservar lugar
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

const Plans = () => {
  return (
    <section
      className="w-full lg:py-80 py-10 bg-platinum flex flex-col md:flex-row items-center md:justify-center"
      id="planes"
    >
      <div className="flex flex-col h-full w-4/5 md:w-3/5 lg:w-4/5 items-center justify-center lg:flex-row">
        <div>
          <h2 className="text-6xl md:text-7xl xl:text-9xl text-neonBlue font-semibold">
            Planes
          </h2>
          <p className="text-xl md:text-3xl xl:text-4xl font-light text-gray-800">
            Con nuestros planes vas a poder disfrutar de todas las comodidades
            que ofrece Workbox y mucho más.
          </p>
        </div>
        <div
          className="divider bg-neonBlue w-full h-1 lg:w-1 lg:divider-horizontal"
          // style={{ width: "2px" }}
        ></div>
        <div className="w-full">
          <div className="collapse w-full">
            <input type="checkbox" className="peer" />
            <div className="flex items-center collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <img src={dots} alt="" />
              <h3 className="text-lg font-medium">Pase por el día</h3>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <div className="flex flex-col sm:px-4">
                <p>Que ofrecemos:</p>
                <ul className="pl-8 py-2 list-decimal">
                  <li className="">Item 1</li>
                  <li className="">Item 2</li>
                  <li className="">Item 3</li>
                  <li className="">Item 4</li>
                  <li className="">Item 5</li>
                </ul>
                <div className="flex w-full justify-between xl:justify-around">
                  <div>
                    <div className="text-sm sm:text-md  opacity-60 whitespace-nowrap">
                      Precio con IVA incluido
                    </div>
                    <div className="text-xl sm:text-2xl md:text-4xl leading-9 font-extrabold whitespace-nowrap">
                      $89,400
                    </div>
                  </div>
                  <button className="btn btn-success btn-sm sm:px-8 self-end mb-2 md:mb-0">Reservar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse w-full">
            <input type="checkbox" className="peer" />
            <div className="flex items-center collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <img src={dots} alt="" />
              <h3 className="text-lg font-medium">Espacio compartido</h3>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <div className="flex flex-col sm:px-4">
                <p>Que ofrecemos:</p>
                <ul className="pl-8 py-2 list-decimal">
                  <li className="">Item 1</li>
                  <li className="">Item 2</li>
                  <li className="">Item 3</li>
                  <li className="">Item 4</li>
                  <li className="">Item 5</li>
                </ul>
                <div className="flex w-full justify-between xl:justify-around">
                  <div>
                  <div className="text-sm sm:text-md  opacity-60 whitespace-nowrap">
                      Precio con IVA incluido
                    </div>
                    <div className="text-xl sm:text-2xl md:text-4xl leading-9 font-extrabold whitespace-nowrap">
                      $89,400
                    </div>
                  </div>
                  <button className="btn btn-success btn-sm sm:px-8 self-end mb-2 md:mb-0">Reservar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse w-full">
            <input type="checkbox" className="peer" />
            <div className="flex items-center collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <img src={dots} alt="" />
              <h3 className="text-lg font-medium">Oficina privada</h3>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <div className="flex flex-col sm:px-4">
                <p>Que ofrecemos:</p>
                <ul className="pl-8 py-2 list-decimal">
                  <li className="">Item 1</li>
                  <li className="">Item 2</li>
                  <li className="">Item 3</li>
                  <li className="">Item 4</li>
                  <li className="">Item 5</li>
                </ul>
                <div className="flex w-full justify-between xl:justify-around">
                  <div>
                  <div className="text-sm sm:text-md  opacity-60 whitespace-nowrap">
                      Precio con IVA incluido
                    </div>
                    <div className="text-xl sm:text-2xl md:text-4xl leading-9 font-extrabold whitespace-nowrap">
                      $89,400
                    </div>
                  </div>
                  <button className="btn btn-success btn-sm sm:px-8 self-end mb-2 md:mb-0">Reservar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse w-full">
            <input type="checkbox" className="peer" />
            <div className="flex items-center collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <img src={dots} alt="" />
              <h3 className="text-lg font-medium">Sala de reuniones</h3>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <div className="flex flex-col sm:px-4">
                <p>Que ofrecemos:</p>
                <ul className="pl-8 py-2 list-decimal">
                  <li className="">Item 1</li>
                  <li className="">Item 2</li>
                  <li className="">Item 3</li>
                  <li className="">Item 4</li>
                  <li className="">Item 5</li>
                </ul>
                <div className="flex w-full justify-between xl:justify-around">
                  <div>
                  <div className="text-sm sm:text-md  opacity-60 whitespace-nowrap">
                      Precio con IVA incluido
                    </div>
                    <div className="text-xl sm:text-2xl md:text-4xl leading-9 font-extrabold whitespace-nowrap">
                      $89,400
                    </div>
                  </div>
                  <button className="btn btn-success btn-sm sm:px-8 self-end mb-2 md:mb-0">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
