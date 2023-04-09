import React from 'react';
import { Link } from 'react-scroll';

import 'react-multi-carousel/lib/styles.css';

import PRICES from '../../data/prices';
import CheckIcon from '../../components/Icons/CheckIcon';

const FeatureCard = ({ name, price, description, billingPeriod, features }) => {
  return (
    <div className='max-w-md border rounded-lg'>
      <div className='p-6'>
        <h1 className='text-2xl font-bold text-gray-700'>{name}</h1>

        <h4 className='text-4xl font-semibold text-gray-800 opacity-90 mt-6'>
          <span className='text-oldGold'>$</span>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}

          <span className='text-base font-normal text-gray-400'>
            {`/${billingPeriod}`}
          </span>
        </h4>

        <p className='mt-4 text-gray-500'>{description}</p>
      </div>

      <hr className='border-gray-200'></hr>

      <div className='p-6'>
        <h1 className='text-lg font-medium text-gray-700 capitalize lg:text-xl'>
          Incluye:
        </h1>

        <div className='mt-8 space-y-4'>
          {features &&
            features.map((feature, index) => (
              <div key={index} className='flex items-center'>
                <span className='text-oldGold'>
                  <CheckIcon />
                </span>

                <span className='ml-4 text-gray-700'>{feature}</span>
              </div>
            ))}
        </div>

        <Link to='contacto' spy={true} smooth={true} duration={100}>
          <button className='w-full mt-8 tracking-tight px-4 py-2 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none'>
            Reservar
          </button>
        </Link>
      </div>
    </div>
  );
};

const PlansV2 = () => {
  const openSpacePlans = PRICES.filter(({ type }) => type === 'open-space');
  return (
    <section id='planes' className='bg-white pb-14'>
      <div className='container px-6 py-8 mx-auto'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-3xl font-bold lg:text-4xl text-darkness'>
              Elegí tu pase ideal en Workbox
            </h2>
            <p className='mt-4 text-gray-800 text-lg opacity-80'>
              Descubrí nuestras opciones de pases diarios y mensuales
            </p>
          </div>
        </div>

        <div className='grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3 px-6'>
          {openSpacePlans.map((plan) => (
            <FeatureCard {...plan} key={`feature-card-${plan.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansV2;
