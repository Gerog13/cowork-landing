import React from "react";
import logo from "../../assets/images/logo.png";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full p-10 flex flex-col justify-around items-center bg-gray-800">
      <div className="flex flex-col items-center justify-center">
        <h1>Horarios</h1>
        <p>Lunes a Viernes</p>
        <p>09:00 AM - 18:00 PM</p>
      </div>
      <div className="flex items-center justify-center">
        <img src={logo} alt="Workbox space logo" className="w-52" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>Redes Sociales</h2>
        <ul className="flex w-full mt-2 justify-around items-center">
          <li>
            <a href="#" className="text-2xl">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl">
              <BsWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
