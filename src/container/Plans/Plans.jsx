import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PLANS = [
  {
    id: 1,
    title: "Pase por el día",
    billingPeriod: "day",
    price: 2500,
    description:
      "Accedé por la jornada laboral completa a todos los beneficios que Workbox te brinda.",
  },
  {
    id: 2,
    title: "Media jornada",
    billingPeriod: "month",
    price: 3400,
    description:
      "Para aquellos coworkers que quieran desarrollar sus tareas y llevar a cabo sus proyectos en una jornada reducida.",
  },
  {
    id: 3,
    title: "Jornada completa",
    billingPeriod: "month",
    price: 3960,
    description:
      "Destinado a los coworkers que quieran disponer de nuestras instalaciones en cualquier horario.",
  },
  {
    id: 4,
    title: "Box",
    billingPeriod: "month",
    price: 37900,
    description:
      "Espacio semi-privado fijo y de uso exclusivo para 2 personas, equipado con el mejor mobiliario.",
  },
  {
    id: 5,
    title: "Oficina privada",
    billingPeriod: "month",
    price: 65600,
    description:
      "Espacio privado climatizado con capacidad hasta 6 personas acondicionado con mobiliario ergonómico premium.",
  },
  {
    id: 6,
    title: "Sala de reuniones",
    billingPeriod: "hour",
    price: 4500,
    description:
      "Para aquellas personas que deseen tener reuniones con su equipo o con sus clientes de forma privada.",
  },
  {
    id: 7,
    title: "Oficina Virtual",
    billingPeriod: "month",
    price: 4800,
    description:
      "Te ofrecemos un domicilio comercial, recibimos tu correspondencia y atendemos de manera telefónica o virtual via e-mail a cada uno de tus clientes.",
  },
];

const PlanCard = ({
  id,
  title,
  price,
  description,
  amountOfDays,
  billingPeriod,
}) => {
  let billingText;
  let billingPrice;
  if (id === 2) {
    switch (amountOfDays) {
      case "2":
        billingPrice = 6800;
        break;
      case "3":
        billingPrice = 9700;
        break;
      case "5":
        billingPrice = 15300;
        break;
      default:
    }
  } else if (id === 3) {
    switch (amountOfDays) {
      case "2":
        billingPrice = 12300;
        break;
      case "3":
        billingPrice = 17500;

        break;
      case "5":
        billingPrice = 27700;
        break;
      default:
    }
  } else {
    billingPrice = price;
  }

  switch (billingPeriod) {
    case "day":
      billingText = "/ Día";
      break;
    case "month":
      billingText = "/ Mes";
      break;
    case "hour":
      billingText = "/ Hora";
      break;
    default:
      billingText = "";
  }
  return (
    <div className="mx-2 px-6 py-4 transition-colors duration-200 transform rounded-md border tracking-tight h-64 lg:h-[18rem] xl:h-[16rem] flex justify-between flex-col">
      <p className="text-lg font-medium text-darkness">{title}</p>
      <h4 className="text-4xl font-semibold text-gray-800 opacity-90">
        <span className="text-oldGold">$</span>
        {billingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}

        <span className="text-gray-500 text-lg uppercase">+iva </span>
        <span className="text-base font-normal text-gray-400">
          {billingText}
        </span>
      </h4>
      <p className="text-gray-800 font-medium opacity-80">{description}</p>
      <Link to="contacto" spy={true} smooth={true} duration={100}>
        <button className="w-full tracking-tight px-4 py-2 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none">
          Reservar
        </button>
      </Link>
    </div>
  );
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className="md:mt-0 absolute top-[-34px] right-1">
      <button className="text-3xl mr-2 hover:opacity-70" onClick={previous}>
        <IoIosArrowRoundBack />
      </button>
      <button className="text-3xl hover:opacity-70" onClick={next}>
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};
const Plans = () => {
  const [amountOfDays, setAmountOfDays] = useState("5");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const selectDaysHandler = (e) => {
    setAmountOfDays(e.target.value);
  };

  return (
    <section id="planes" className="bg-white pb-14 ">
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
        <div className="max-w-2xl p-1.5 mt-10 mb-12 md:mb-0 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
          <div className="grid gap-3 grid-cols-3">
            <button
              onClick={selectDaysHandler}
              value={2}
              className={
                "px-3 py-2 font-medium bg-transparent text-gray-800 uppercase transition-colors duration-300 transform rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200" +
                (amountOfDays === "2" ? " bg-gray-200" : "")
              }
            >
              2 días
            </button>

            <button
              onClick={selectDaysHandler}
              value={3}
              className={
                "px-3 py-2 font-medium bg-transparent text-gray-800 uppercase transition-colors duration-300 transform rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200" +
                (amountOfDays === "3" ? " bg-gray-200" : "")
              }
            >
              3 días
            </button>

            <button
              onClick={selectDaysHandler}
              value={5}
              className={
                "px-3 py-2 font-medium bg-transparent text-gray-800 uppercase transition-colors duration-300 transform rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200" +
                (amountOfDays === "5" ? " bg-gray-200" : "")
              }
            >
              5 días
            </button>
          </div>
        </div>
        <div className="relative mt-10">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="in"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                id={plan.id}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                amountOfDays={amountOfDays}
                billingPeriod={plan.billingPeriod}
              />
            ))}
          </Carousel>
        </div>

        <div className="border text-center rounded-md flex flex-col mt-10 p-6 items-center justify-content-center">
          <h3 className="font-semibold text-2xl text-darkness mb-3">
            Todas nuestras membresías incluyen
          </h3>
          <p className="text-darkness text-lg">
            Internet de alta velocidad - Cocina equipada - Coffe break - Locker
            propio - Mobiliario ergónomico - Servicio de impresión
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
