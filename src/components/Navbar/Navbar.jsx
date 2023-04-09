import React from 'react';

import Logo from '../../assets/images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex w-full px-4 py-2 items-center justify-between bg-base-100'>
      <div className='flex-1'>
        <a href='/'>
          <img src={Logo} alt='Workbox logo' height={200} width={200} />
        </a>
      </div>
      <ul className='w-1/4 flex justify-around font-semibold text-lg'>
        <li className='cursor-pointer border-b-2 border-transparent hover:border-neonBlue hover:text-neonBlue transition-all ease duration-150'>
          <Link to='servicios' spy={true} smooth={true} duration={100}>
            Servicios
          </Link>
        </li>
        <li className='cursor-pointer border-b-2 border-transparent hover:border-neonBlue hover:text-neonBlue transition-all ease duration-150'>
          <Link to='planes' spy={true} smooth={true} duration={100}>
            Planes
          </Link>
        </li>
        <li className='cursor-pointer border-b-2 border-transparent hover:border-neonBlue hover:text-neonBlue transition-all ease duration-150'>
          <Link to='oficinas' spy={true} smooth={true} duration={100}>
            Oficinas
          </Link>
        </li>
        <li className='cursor-pointer border-b-2 border-transparent hover:border-neonBlue hover:text-neonBlue transition-all ease duration-150'>
          <Link to='galeria' spy={true} smooth={true} duration={100}>
            Galería
          </Link>
        </li>
        <li className='cursor-pointer border-b-2 border-transparent hover:border-neonBlue hover:text-neonBlue transition-all ease duration-150'>
          <Link to='contacto' spy={true} smooth={true} duration={100}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
