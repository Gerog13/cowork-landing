import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { GiLockers } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";
import { MdOutlineChair } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsMegaphone } from "react-icons/bs";

const Services = () => {
  return (
    <section id="servicios" className="bg-white w-full py-32">
      <div className="max-w-6xl mx-auto text-left">
        <div className="relative w-max mb-14">
          <p className="text-blackness text-6xl">¿Qué ofrecemos?</p>
          <hr className="border mt-4 mb-6 w-1/2 absolute right-0 mr-2 border-lightGray" />
        </div>
        <p className="w-3/5 mb-20 text-xl text-blackness text-opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          accusamus aliquam explicabo nulla enim consequuntur quia nam veritatis
          delectus? Dicta?
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaWifi className="fill-lightGray w-14 h-14" />
            <span className="text-lg font-medium mt-3 text-blackness">
              Con nuestro wifi de alta velocidad, navega y trabaja sin
              limitaciones ni interrupciones.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <GiLockers className="fill-lightGray w-14 h-14" />
            <span className="text-lg font-medium mt-3 text-blackness">
              Nuestros lockers te van a permitir guardar tus objetos de valor de
              forma segura.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <SiBuymeacoffee className="fill-lightGray w-14 h-14" />
            <span className="text-lg font-medium mt-3 text-blackness">
              Dispone de té, cafe, mate y todo tipo de infusiones con tu
              membresía.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <BsMailbox className="fill-lightGray w-14 h-14" />
            <span className="text-lg font-medium mt-3 text-blackness">
              ¿Querés enviar tu correspondencia al cowork? ¡Tranquilo, nosotros
              la recibimos!
            </span>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineChair className="fill-lightGray w-14 h-14" />
            <span className="text-lg font-medium mt-3 text-blackness">
              Sentite cómodo en todo momento con nuestros muebles ergónomicos de
              alta calidad.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <IoIosPeople className="fill-lightGray w-14 h-14" />
            <span className="text-lg font-medium mt-3 text-blackness">
              Tene reuniones con tu equipo de forma privada y hacé crecer tu
              empresa/emprendimiento.
            </span>
          </div>
        </div>
        <div className="mt-36">
          <p className="text-blackness text-4xl flex">
            Organizá tu evento{" "}
            <BsMegaphone className="ml-4 fill-lightGray opacity-60" />
          </p>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div className="indicator shadow-sm w-11/12">
              <div className="indicator-item indicator-bottom">
                <button className="btn btn-primary bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
                  Reservar
                </button>
              </div>
              <div className="card border rounded-none w-full">
                <div className="card-body">
                  <h2 className="card-title text-blackness">Conferencias</h2>
                  <p className="text-sm font-light text-blackness">
                    Rerum reiciendis beatae excepturi
                  </p>
                </div>
              </div>
            </div>
            <div className="indicator shadow-sm w-11/12">
              <div className="indicator-item indicator-bottom">
                <button className="btn btn-primary bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
                  Reservar
                </button>
              </div>
              <div className="card border rounded-none w-full">
                <div className="card-body">
                  <h2 className="card-title text-blackness">Seminarios</h2>
                  <p className="text-sm font-light text-blackness">
                    Rerum reiciendis beatae tenetur excepturi
                  </p>
                </div>
              </div>
            </div>
            <div className="indicator shadow-sm w-11/12">
              <div className="indicator-item indicator-bottom">
                <button className="btn btn-primary bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
                  Reservar
                </button>
              </div>
              <div className="card border rounded-none w-full">
                <div className="card-body">
                  <h2 className="card-title text-blackness">
                    Reuniones Empresariales
                  </h2>
                  <p className="text-sm font-light text-blackness">
                    Rerum reiciendis beatae tenetur excepturi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
