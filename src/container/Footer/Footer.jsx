import React from "react";
import logo from "../../assets/images/white-logo.png";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row w-full pt-6 pb-10 md:py-0 md:h-32 items-center justify-between p-4 bg-black">
      <img
        src={logo}
        className="order-first mb-4 md:mb-0"
        alt="Workbox espacios de trabajo"
        height={300}
        width={300}
      />
      <div className="flex w-52 items-center justify-around ">
        <a
          className="rounded-full p-4 text-black bg-white hover:bg-oldGold hover:text-white hover:shadow-md transition-all ease-out duration-300"
          href="https://wa.me/2613004404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="text-2xl" />
        </a>
        <a
          className="rounded-full p-4 text-black bg-white hover:bg-oldGold hover:text-white hover:shadow-md transition-all ease-out duration-300"
          href="https://www.instagram.com/workboxmza/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className="text-2xl" />
        </a>
        <a
          className="rounded-full p-4 text-black bg-white hover:bg-oldGold hover:text-white hover:shadow-md transition-all ease-out duration-300"
          href="https://www.facebook.com/Workbox-112111401541793"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
