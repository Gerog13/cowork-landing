import React from 'react';
import { Link } from 'react-scroll';

import 'react-multi-carousel/lib/styles.css';
import { PeopleIcon } from '../../components/Icons';
import PRICES from '../../data/prices';

const OfficeCard = ({
  name,
  imageURL,
  capacity,
  billingPeriod,
  price,
  description,
  priceLabel,
}) => {
  return (
    <div className='w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
      <img
        className='object-cover object-center w-full h-56'
        src={imageURL}
        alt='avatar'
      />

      <div className='flex items-center px-6 py-3 bg-black'>
        <PeopleIcon />
        <h1 className='mx-3 text-lg font-semibold text-white'>{capacity}</h1>
      </div>

      <div className='px-6 py-4 flex flex-col justify-end'>
        <h1 className='text-xl font-semibold text-gray-800'>{name}</h1>

        <p className='py-2 text-gray-700 mb-8 flex-grow'>{description}</p>
        <div className='flex flex-col min-h-16 justify-end'>
          {priceLabel && <span className='text-oldGold'>{priceLabel}</span>}

          <h4 className='text-4xl font-semibold text-gray-800 opacity-90 mt-0'>
            <span className='text-oldGold'>$</span>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}

            <span className='text-base font-normal text-gray-400'>
              {`/${billingPeriod}`}
            </span>
          </h4>
        </div>

        <Link to='contacto' spy={true} smooth={true} duration={100}>
          <button className='mt-8 w-full tracking-tight px-4 py-2 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none'>
            Reservar
          </button>
        </Link>
      </div>
    </div>
  );
};

const Offices = () => {
  const offices = PRICES.filter(({ type }) => type === 'office');
  return (
    <section id='oficinas' className='bg-gray-100 pb-14'>
      <div className='container px-6 py-8 mx-auto'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-3xl font-bold lg:text-4xl text-darkness'>
              Espacios exclusivos para tus necesidades laborales
            </h2>
            <p className='mt-4 text-gray-800 text-lg opacity-80'>
              Explorá nuestras opciones de escritorios dedicados, oficinas
              privadas y salas de reuniones, diseñadas para ofrecerte comodidad
              y eficiencia en tu trabajo.
            </p>
          </div>
        </div>

        <div className='grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6'>
          {offices.map((office) => (
            <OfficeCard {...office} key={`office-card-${office.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;
