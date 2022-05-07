import React, { useState } from "react";
// import { animateScroll as scroll } from "react-scroll";
import {
  wifi,
  lockers,
  camera,
  office,
  meetingRoom,
  furniture,
  clock,
  benefits,
  coffee,
  mail,
  bike,
  printer,
  wifiSvg,
  lockersSvg,
  cameraSvg,
  officeSvg,
  meetingRoomSvg,
  furnitureSvg,
  clockSvg,
  benefitsSvg,
  coffeeSvg,
  mailSvg,
  bikeSvg,
  printerSvg,
} from "../../assets/services";

import ReactCardFlip from "react-card-flip";

const ServiceCard = ({ bg, svg, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront={0.6}
      flipSpeedFrontToBack={0.6}
    >
      <div
        onMouseEnter={() => setIsFlipped((prevState) => !prevState)}
        onMouseLeave={() => setIsFlipped((prevState) => !prevState)}
        className="card w-72 h-64 bg-base-100 shadow-xl image-full"
      >
        <figure>
          <img src={bg} alt={title} />
        </figure>
        <div className="card-body h-full items-center justify-center">
          <h2 className="text-3xl text-center text-white font-bold uppercase">
            {title}
          </h2>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsFlipped((prevState) => !prevState)}
        onMouseLeave={() => setIsFlipped((prevState) => !prevState)}
        className="card items-center p-8 w-72 h-64 bg-base-200 shadow-xl"
      >
        <img src={svg} alt="chairsvg" width={80} height={80} />
        <p className="text-md font-semibold text-center text-black mt-8">
          {description}
        </p>
      </div>
    </ReactCardFlip>
  );
};

// const Service = ({ img, title, description }) => {
//   return (
//     <div className="card w-72 h-64 bg-base-100 shadow-xl image-full">
//       <figure>
//         <img src={img} alt={title} />
//       </figure>
//       <div className="card-body h-full items-center justify-center">
//         <h2 className="text-3xl text-white font-bold uppercase mt-8">
//           {title}
//         </h2>
//         <p className="text-lg text-center text-gray-200 mt-4">{description}</p>
//       </div>
//     </div>
//   );
// };

const Services = () => {
  return (
    <section
      id="servicios"
      className="min-h-screen bg-base-100 flex justify-center items-center"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-5xl font-extrabold">Nuestros Servicios</h1>
        <div className="px-10 flex flex-wrap mt-14 w-full justify-around gap-4">
          <ServiceCard
            bg={wifi}
            svg={wifiSvg}
            title="Wifi"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          />
          <ServiceCard
            bg={lockers}
            svg={lockersSvg}
            title="Lockers"
            description="Nuestros lockers te van a permitir guardar tus objetos de valor de forma segura"
          />
          <ServiceCard
            bg={camera}
            svg={cameraSvg}
            title="Monitoreo"
            description="Para nosotros, tu seguridad y la de tus equipos es la más importante"
          />
          <ServiceCard
            bg={furniture}
            svg={furnitureSvg}
            title="Mobiliario"
            description="Sentite cómodo en todo momento con nuestros muebles ergónomicos de alta calidad"
          />
          <ServiceCard
            bg={meetingRoom}
            svg={meetingRoomSvg}
            title="Sala de Reunión"
            description="Tene reuniones con tu equipo de forma privada y hace crecer tu empresa/emprendimiento"
          />
          <ServiceCard
            bg={office}
            svg={officeSvg}
            title="Oficinas Privadas"
            description="Tene tu espacio que te permita atender clientes o trabajar cómodamente"
          />
          <ServiceCard
            bg={clock}
            svg={clockSvg}
            title="Horario"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          />
          <ServiceCard
            bg={benefits}
            svg={benefitsSvg}
            title="Eventos"
            description="Nuestros lockers te van a permitir guardar tus objetos de valor de forma segura"
          />
          <ServiceCard
            bg={coffee}
            svg={coffeeSvg}
            title="Coffe Break"
            description="Para nosotros, tu seguridad y la de tus equipos es la más importante"
          />
          <ServiceCard
            bg={mail}
            svg={mailSvg}
            title="Dirección"
            description="Sentite cómodo en todo momento con nuestros muebles ergónomicos de alta calidad"
          />
          <ServiceCard
            bg={bike}
            svg={bikeSvg}
            title="Bike Parking"
            description="Tene reuniones con tu equipo de forma privada y hace crecer tu empresa/emprendimiento"
          />
          <ServiceCard
            bg={printer}
            svg={printerSvg}
            title="Servicio de impresión"
            description="Tene tu espacio que te permita atender clientes o trabajar cómodamente"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

{
  /* <Service
            img={wifi}
            title="Wifi"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          />
          <Service
            img={lockers}
            title="Lockers"
            description="Guarda tus objetos de manera segura"
          />
          <Service
            img={camera}
            title="Cámaras"
            description="Sistema de vigilancia las 24hs"
          />
          <Service
            img={office}
            title="Oficinas privadas"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          />
          <Service
            img={meetingRoom}
            title="Sala de reuniones"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          />
          <Service
            img={furniture}
            title="Mobiliario"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          /> */
}
