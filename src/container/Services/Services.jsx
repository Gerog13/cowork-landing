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

// import ReactCardFlip from "react-card-flip";

// const ServiceCard = ({ bg, svg, title, description }) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   return (
//     <ReactCardFlip
//       isFlipped={isFlipped}
//       flipDirection="horizontal"
//       flipSpeedBackToFront={0.6}
//       flipSpeedFrontToBack={0.6}
//     >
//       <div
//         onMouseEnter={() => setIsFlipped((prevState) => !prevState)}
//         onMouseLeave={() => setIsFlipped((prevState) => !prevState)}
//         className="card w-72 h-64 shadow-xl image-full"
//       >
//         <figure>
//           <img src={bg} alt={title} loading="lazy" />
//         </figure>
//         <div className="card-body h-full items-center justify-center">
//           <h2 className="text-3xl text-center text-white font-bold uppercase">
//             {title}
//           </h2>
//         </div>
//       </div>
//       <div
//         onMouseEnter={() => setIsFlipped((prevState) => !prevState)}
//         onMouseLeave={() => setIsFlipped((prevState) => !prevState)}
//         className="card items-center p-8 w-72 h-64 bg-gray-300 shadow-xl"
//       >
//         <img src={svg} alt={title} width={80} height={80} loading="lazy" />
//         <p className="text-md font-semibold text-center text-black mt-8">
//           {description}
//         </p>
//       </div>
//     </ReactCardFlip>
//   );
// };

const Card = ({ svg, title, description }) => {
  return (
    <div className="card items-center p-8 w-full sm:w-4/5 md:w-72 md:h-72 bg-gray-300 shadow-xl">
      <h3 className="mb-2 font-bold text-black text-xl text-center">{title}</h3>
      <img src={svg} alt={title} width={80} height={80} loading="lazy" />
      <p className="text-md font-semibold text-center text-black mt-8">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="servicios"
      className=" md:min-h-screen bg-white flex justify-center items-center"
    >
      <div className="w-full flex flex-col py-10 md:py-20 items-center">
        <h2 className="text-4xl md:text-5xl text-oldGold font-semibold md:-mt-10">
          Nuestros Servicios
        </h2>
        <div className="px-10 flex flex-wrap mt-6 md:mt-14 w-full justify-around gap-4">
          <Card
            svg={wifiSvg}
            title="Wifi"
            description="Con nuestro wifi de alta velocidad, navega y trabaja sin limitaciones ni interrupciones"
          />
          <Card
            svg={lockersSvg}
            title="Lockers"
            description="Nuestros lockers te van a permitir guardar tus objetos de valor de forma segura"
          />
          <Card
            svg={cameraSvg}
            title="Monitoreo"
            description="Para nosotros, tu seguridad y la de tus equipos es la más importante"
          />
          <Card
            svg={furnitureSvg}
            title="Mobiliario"
            description="Sentite cómodo en todo momento con nuestros muebles ergónomicos de alta calidad"
          />
          <Card
            svg={meetingRoomSvg}
            title="Sala de Reunión"
            description="Tene reuniones con tu equipo de forma privada y hace crecer tu empresa/emprendimiento"
          />
          <Card
            svg={officeSvg}
            title="Oficinas Privadas"
            description="Tene tu espacio que te permita atender clientes o trabajar cómodamente"
          />
          <Card
            svg={clockSvg}
            title="Horario"
            description="Con nuestro wifi de alta velocidad, navegá y trabaja sin limitaciones ni interrupciones"
          />
          <Card
            svg={benefitsSvg}
            title="Eventos"
            description="La diversión y los afters van a estar asegurados en Workbox"
          />
          <Card
            svg={coffeeSvg}
            title="Coffe Break"
            description="Un cafe para acompañar el trabajo es algo sumamente esencial"
          />
          <Card
            svg={mailSvg}
            title="Dirección"
            description="¿Querés enviar tu correspondencia al cowork? Tranquilo, nosotros la recibimos!"
          />
          <Card
            svg={bikeSvg}
            title="Bike Parking"
            description="Aparca tu bici de manera segura"
          />
          <Card
            svg={printerSvg}
            title="Servicio de impresión"
            description="Escaneá, imprimí y digitalizá tus documentos"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

