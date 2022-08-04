import React from "react";
import { Link } from "react-scroll";
import { BsFillCheckCircleFill } from "react-icons/bs";

import "./Plans.css";

const Plans = () => {
  return (

    <section
      id="planes"
      className="bg-white pb-14 px-6 sm:px-4 md:px-2 lg:px-0"
    >
      <div className="container px-6 py-10 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl text-darkness">
              Nuestros planes
            </h2>
            <p className="mt-4 text-gray-800 text-lg opacity-80">
              Accedé a cada uno de nuestros servicios a través de los planes que
              Workbox te ofrece.
            </p>
          </div>
        </div>

        <div className="grid gap-6 mt-8 lg:mt-12 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border tracking-tight">
            <p className="text-lg font-medium text-darkness">Pase por el día</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 opacity-90">
              <span className="text-oldGold">$</span>2.550<span className="text-gray-500 text-lg uppercase">+iva </span>
              <span className="text-base font-normal text-gray-400">/ Día</span>
            </h4>
            <p className="mt-4 text-gray-800 font-medium opacity-80 h-20">
              Para aquellas personas que quieren utilizar nuestros servicios en
              el día.
            </p>

            <div className="mt-8 space-y-8 h-[20rem]">
              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Internet de alta velocidad.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Locker propio.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Sala de llamadas privada.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Coffe break - cocina equipada.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Mobiliario ergónomico.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Servicio de impresión.
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full tracking-tight px-4 py-2 mt-10 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>


          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border tracking-tight">
            <p className="text-lg font-medium text-darkness">
              Jornada completa
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 opacity-90">
              <span className="text-oldGold">$</span>18.000<span className="text-gray-500 text-lg uppercase">+iva </span>
              <span className="text-base font-normal text-gray-400">/ Mes</span>
            </h4>
            <p className="mt-4 text-gray-800 font-medium opacity-80 h-20">
              Para aquellas personas que deseen concurrir al cowork de Lunes a Viernes en
              cualquier horario.
            </p>

            <div className="mt-8 space-y-8 h-[20rem]">
              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Internet de alta velocidad.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Locker propio.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Sala de llamadas privada.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Coffe break - cocina equipada.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Mobiliario ergónomico.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Servicio de impresión.
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full tracking-tight px-4 py-2 mt-10 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform bg-bgGold rounded-lg tracking-tight">
            <p className="text-lg font-medium text-darkness">Media jornada</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800">
              <span className="text-oldGold">$</span>11.700<span className="text-gray-500 text-lg uppercase">+iva </span>
              <span className="text-base font-normal text-gray-400">/ Mes</span>
            </h4>
            <p className="mt-4 text-gray-800 font-medium opacity-80 h-20">
              Para aquellas personas que deseen asistir al cowork solamente
              media jornada.
            </p>

            <div className="mt-8 space-y-8 h-[20rem]">
              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Internet de alta velocidad.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Locker propio.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Sala de llamadas privada.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Coffe break - cocina equipada.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Mobiliario ergónomico.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Servicio de impresión.
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full tracking-tight px-4 py-2 mt-10 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border tracking-tight">
            <p className="text-lg font-medium text-darkness">
              Oficina privada
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 opacity-90">
              <span className="text-oldGold">$</span>42.000<span className="text-gray-500 text-lg uppercase">+iva </span>
              <span className="text-base font-normal text-gray-400">/ Mes</span>
            </h4>
            <p className="mt-4 text-gray-800 font-medium opacity-80 h-20">
              Para aquellas personas que deseen tener un espacio privado
            </p>

            <div className="mt-8 space-y-8 h-[20rem]">
              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Internet de alta velocidad.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Mobiliario ergónomico premium.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Capacidad hasta 4 personas.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Espacio climatizado.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Llave de seguridad.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Servicio de impresión y locker propio.
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full tracking-tight px-4 py-2 mt-10 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border tracking-tight">
            <p className="text-lg font-medium text-darkness">
              Sala de reuniones
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 opacity-90">
              <span className="text-oldGold">$</span>1.700<span className="text-gray-500 text-lg uppercase">+iva </span>
              <span className="text-base font-normal text-gray-400">/ Hora</span>
            </h4>
            <p className="mt-4 text-gray-800 font-medium opacity-80 h-20">
              Para aquellas personas que deseen tener reuniones con su equipo o
              con sus clientes de forma privada.
            </p>

            <div className="mt-8 space-y-8 h-[20.5rem]">
              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Internet de alta velocidad.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Televisor LED con HDMI.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Capacidad hasta 12 personas.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Espacio climatizado.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Mobiliario ergónomico.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Servicio de impresión.
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full tracking-tight px-4 py-2 mt-10 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border tracking-tight">
            <p className="text-lg font-medium text-darkness">
              Oficina virtual 
            </p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 opacity-90">
            <span className="text-oldGold">$</span>4.200<span className="text-gray-500 text-lg uppercase">+iva </span>
              <span className="text-base font-normal text-gray-400">/ Mes</span>
            </h4>
            <p className="mt-4 text-gray-800 font-medium opacity-80 h-20">
              Para aquellas personas o empresas que deseen manejar su negocio de forma remota sin sacrificar los beneficios
              de una oficina física.
            </p>

            <div className="mt-8 space-y-8 h-[20rem]">
              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Dirección comercial.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Recepción de correspondencia.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Recepción de llamadas.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  2 jornadas en sala de reunión.
                </span>
              </div>

              <div className="flex items-center">
                <BsFillCheckCircleFill width={10} className="fill-oldGold" />
                <span className="mx-4 text-gray-800 font-medium">
                  Recepción de correo electrónico.
                </span>
              </div>
            </div>

            <Link to="contacto" spy={true} smooth={true} duration={100}>
              <button className="w-full tracking-tight px-4 py-2 mt-10 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
                Reservar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
