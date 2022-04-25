import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case font-extrabold text-xl">
          Workbox
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Planes</a>
          </li>
          <li>
            <a>Galería</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
