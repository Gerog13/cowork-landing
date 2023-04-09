import React, { useState } from 'react';
import Logo from '../../assets/images/logo-r.png';
import { Link } from 'react-scroll';

import cowork from '../../assets/images/IMG_4077.jpg';
import WorkboxLogo from '../../components/workboxLogo';

const Mainui = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <main className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg
              className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>

            <div>
              <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
                <nav
                  className='relative flex items-center justify-between sm:h-10 lg:justify-start'
                  aria-label='Global'
                >
                  <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                    <div className='flex items-center justify-between w-full md:w-auto'>
                      <a
                        className='text-2xl font-bold text-white lg:text-3xl hover:text-gray-300'
                        href='/'
                      >
                        <img
                          src={Logo}
                          alt='Workbox logo'
                          height={40}
                          width={40}
                        />
                      </a>
                      <div className='-mr-2 flex items-center md:hidden'>
                        <button
                          type='button'
                          onClick={() =>
                            setToggleMenu((prevState) => !prevState)
                          }
                          className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                          aria-expanded='false'
                        >
                          <span className='sr-only'>Abrir menú</span>
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M4 6h16M4 12h16M4 18h16'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex md:justify-around md:items-center md:ml-10 md:pr-4 md:space-x-12 '>
                    <Link
                      className='block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-gray-900 text-gray-900 transition-all ease duration-150'
                      to='servicios'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Servicios
                    </Link>

                    <Link
                      className='block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-gray-900 text-gray-900 transition-all ease duration-150'
                      to='planes'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Planes
                    </Link>
                    <Link
                      className='block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-gray-900 text-gray-900 transition-all ease duration-150'
                      to='oficinas'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Oficinas
                    </Link>
                    <Link
                      className='block cursor-pointer font-medium border-b border-transparent hover:border-b hover:border-gray-900 text-gray-900 transition-all ease duration-150'
                      to='contacto'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Contacto
                    </Link>
                    <Link
                      className='cursor-pointer flex items-center justify-center px-3 py-1 text-sm lg:mt-0 font-bold tracking-wide text-center text-white transition-all ease duration-300 rounded-sm transform bg-gray-900 border-2 border-transparent hover:border-gray-900 hover:bg-transparent hover:text-gray-900 hover:shadow-sm hover:opacity-90 lg:block'
                      to='contacto'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Reservar
                    </Link>
                  </div>
                </nav>
              </div>

              <div
                className={
                  'absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right' +
                  (toggleMenu ? ' hidden' : '')
                }
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div>
                      <img
                        src={Logo}
                        alt='Workbox logo'
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className='-mr-2'>
                      <button
                        type='button'
                        onClick={() => setToggleMenu((prevState) => !prevState)}
                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      >
                        <span className='sr-only'>Cerrar menú</span>
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='px-6 pt-6 pb-3 space-y-4'>
                    <Link
                      className='block cursor-pointer font-medium text-gray-900 lg:mx-8 transition-all ease duration-150'
                      to='servicios'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Servicios
                    </Link>

                    <Link
                      className='block cursor-pointer font-medium text-gray-900 lg:mx-8 transition-all ease duration-150'
                      to='planes'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Planes
                    </Link>
                    <Link
                      className='block cursor-pointer font-medium text-gray-900 lg:mx-8 transition-all ease duration-150'
                      to='contacto'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='tracking-tight font-extrabold text-darkness'>
                  <span className='block xl:inline text-4xl md:text-5xl mb-4'>
                    Bienvenido a <br />
                  </span>
                </h1>
                <div className='flex flex-col items-start sm:items-center lg:items-start'>
                  <WorkboxLogo className='max-w-[60%] lg:max-w-[70%]' />
                </div>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  Somos un espacio de conexión, diseñado para fomentar la
                  colaboración y el crecimiento, proporcionando un ambiente
                  óptimo y adaptado a tus necesidades laborales.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <Link
                      className='w-full cursor-pointer tracking-tight flex items-center justify-center uppercase px-10 py-3 border border-transparent font-bold rounded-md text-darkness bg-oldGold hover:bg-[#cca712] text-sm transition-all duration-200 ease'
                      to='planes'
                      spy={true}
                      smooth={true}
                      duration={100}
                    >
                      Ver planes
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src={cowork}
            alt='Workbox espacio de conexión'
          />
        </div>
      </main>
      <div className='w-full min-h-[10rem] tracking-tight text-md px-6 sm:px-4 md:px-0 sm:text-lg md:text-2xl font-semibold flex items-center justify-center text-darkness bg-oldGold'>
        Empezá a trabajar en Workbox y llevá tu productividad al siguiente
        nivel.
      </div>
    </>
  );
};

export default Mainui;
