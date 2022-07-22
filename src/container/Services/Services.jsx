import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { GiLockers } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";
import { MdOutlineChair } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsMegaphone, BsTelephoneOutbound } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section id="servicios" className="bg-gray-800 pb-10">
        <div className="w-full flex items-center justify-center">
          <hr className="border w-4/5 border-white flex items-center justify-center" />
        </div>
        <div className="container px-6 py-10 mx-auto">
          <h2 className="text-3xl font-semibold lg:text-4xl text-white">
            ¿Qué ofrecemos?
          </h2>

          <p className="mt-4 text-gray-300 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <span className="inline-block p-3 text-oldGold bg-bgGold rounded-full">
                <FaWifi className="w-6 h-6" />
              </span>

              <p className="text-2xl font-semibold capitalize text-white">
                Wifi
              </p>

              <p className="text-gray-300">
                Con nuestro wifi de alta velocidad, navega y trabaja sin
                limitaciones ni interrupciones.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-oldGold bg-bgGold rounded-full">
                <GiLockers className="w-6 h-6" />
              </span>

              <p className="text-2xl font-semibold capitalize text-white">
                Lockers
              </p>

              <p className="text-gray-300">
                Nuestros lockers te van a permitir guardar tus objetos de valor
                de forma segura.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-oldGold bg-bgGold rounded-full">
                <SiBuymeacoffee className="w-6 h-6" />
              </span>

              <p className="text-2xl font-semiboldcapitalize text-white">
                Coffe break
              </p>

              <p className="text-gray-300">
                Dispone de té, cafe, mate y todo tipo de infusiones con tu
                membresía.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-oldGold bg-bgGold rounded-full">
                <BsMailbox className="w-6 h-6" />
              </span>

              <p className="text-2xl font-semibold capitalize text-white">
                Dirección
              </p>

              <p className="text-gray-300">
                ¿Querés enviar tu correspondencia al cowork? ¡Tranquilo,
                nosotros la recibimos!
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-oldGold bg-bgGold rounded-full">
                <MdOutlineChair className="w-6 h-6" />
              </span>

              <p className="text-2xl font-semibold capitalize text-white">
                Mobiliario
              </p>

              <p className="text-gray-300">
                Sentite cómodo en todo momento con nuestros muebles ergónomicos
                de alta calidad.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-oldGold bg-bgGold rounded-full ">
                <IoIosPeople className="w-6 h-6" />
              </span>

              <p className="text-2xl font-semibold capitalize text-white">
                Sala de reuniones
              </p>

              <p className="text-gray-300">
                Tene reuniones con tu equipo de forma privada y hacé crecer tu
                empresa/emprendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blackness flex items-center">
            Organizá tu evento con nosotros 📣
            {/* <BsMegaphone className="ml-2 fill-oldGold opacity-80" /> */}
          </h2>

          <p className="block max-w-2xl mt-4 text-xl text-gray-800">
            Workbox te ofrece la posibilidad de poder realizar diversos eventos,
            tales como seminarios, reuniones empresariales, conferencias y mucho
            más.
          </p>

          <div className="mt-6">
            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
              <a
                href="https://api.whatsapp.com/send?phone=+5492617777257&text=%C2%A1Buenas!%20Quiero%20realizar%20mi%20evento%20en%20Workbox%20y%20deseo%20obtener%20mas%20informaci%C3%B3n.%F0%9F%93%A3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto "
              >
                <BsTelephoneOutbound />
                <span className="mx-2 tracking-wide">Reservar</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>

    // <section id="servicios" className="bg-white w-full py-32">
    //   <div className="max-w-6xl mx-auto text-left">
    //     <div className="relative w-max mb-14">
    //       <p className="text-blackness text-6xl">¿Qué ofrecemos?</p>
    //       <hr className="border mt-4 mb-6 w-1/2 absolute right-0 mr-2 border-lightGray" />
    //     </div>
    //     <p className="w-3/5 mb-20 text-xl text-blackness text-opacity-80">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //       accusamus aliquam explicabo nulla enim consequuntur quia nam veritatis
    //       delectus? Dicta?
    //     </p>
    //     <div className="grid grid-cols-3 gap-8">
    //       <div className="flex flex-col items-center">
    //         <FaWifi className="fill-lightGray w-14 h-14" />
    //         <span className="text-lg font-medium mt-3 text-blackness">
    //           Con nuestro wifi de alta velocidad, navega y trabaja sin
    //           limitaciones ni interrupciones.
    //         </span>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <GiLockers className="fill-lightGray w-14 h-14" />
    //         <span className="text-lg font-medium mt-3 text-blackness">
    //           Nuestros lockers te van a permitir guardar tus objetos de valor de
    //           forma segura.
    //         </span>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <SiBuymeacoffee className="fill-lightGray w-14 h-14" />
    //         <span className="text-lg font-medium mt-3 text-blackness">
    //           Dispone de té, cafe, mate y todo tipo de infusiones con tu
    //           membresía.
    //         </span>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <BsMailbox className="fill-lightGray w-14 h-14" />
    //         <span className="text-lg font-medium mt-3 text-blackness">
    //           ¿Querés enviar tu correspondencia al cowork? ¡Tranquilo, nosotros
    //           la recibimos!
    //         </span>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <MdOutlineChair className="fill-lightGray w-14 h-14" />
    //         <span className="text-lg font-medium mt-3 text-blackness">
    //           Sentite cómodo en todo momento con nuestros muebles ergónomicos de
    //           alta calidad.
    //         </span>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <IoIosPeople className="fill-lightGray w-14 h-14" />
    //         <span className="text-lg font-medium mt-3 text-blackness">
    //           Tene reuniones con tu equipo de forma privada y hacé crecer tu
    //           empresa/emprendimiento.
    //         </span>
    //       </div>
    //     </div>
    //     <div className="mt-36">
    //       <p className="text-blackness text-4xl flex">
    //         Organizá tu evento{" "}
    //         <BsMegaphone className="ml-4 fill-lightGray opacity-60" />
    //       </p>
    //       <div className="grid grid-cols-3 gap-8 mt-10">
    //         <div className="indicator shadow-sm w-11/12">
    //           <div className="indicator-item indicator-bottom">
    //             <button className="btn btn-primary bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
    //               Reservar
    //             </button>
    //           </div>
    //           <div className="card border rounded-none w-full">
    //             <div className="card-body">
    //               <h2 className="card-title text-blackness">Conferencias</h2>
    //               <p className="text-sm font-light text-blackness">
    //                 Rerum reiciendis beatae excepturi
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="indicator shadow-sm w-11/12">
    //           <div className="indicator-item indicator-bottom">
    //             <button className="btn btn-primary bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
    //               Reservar
    //             </button>
    //           </div>
    //           <div className="card border rounded-none w-full">
    //             <div className="card-body">
    //               <h2 className="card-title text-blackness">Seminarios</h2>
    //               <p className="text-sm font-light text-blackness">
    //                 Rerum reiciendis beatae tenetur excepturi
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="indicator shadow-sm w-11/12">
    //           <div className="indicator-item indicator-bottom">
    //             <button className="btn btn-primary bg-lightGray rounded-none border-lightGray text-white hover:bg-lightGray hover:border-lightGray hover:opacity-90">
    //               Reservar
    //             </button>
    //           </div>
    //           <div className="card border rounded-none w-full">
    //             <div className="card-body">
    //               <h2 className="card-title text-blackness">
    //                 Reuniones Empresariales
    //               </h2>
    //               <p className="text-sm font-light text-blackness">
    //                 Rerum reiciendis beatae tenetur excepturi
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Services;
