import React from 'react';
import { Link } from 'react-scroll';

import 'react-multi-carousel/lib/styles.css';
import { PeopleIcon } from '../../components/Icons';

const PLANS = [
  {
    id: 4,
    title: 'Escritorio Dedicado',
    imageURL: 'images/offices/fixed-spot.jpg',
    tag: 'office',
    tagIcon: 'location',
    capacity: '2 personas',
    billingPeriod: 'Mes',
    price: 29000,
    description:
      'Espacio de trabajo exclusivo mensual para 2 personas, con escritorios dedicados y mobiliario ergonómico.',
    features: [
      'Espacio para 2 personas',
      'Uso exclusivo y fijo',
      'Mobiliario ergonómico',
      'Conexión Wi-Fi de alta velocidad',
      'Acceso a áreas comunes',
    ],
  },
  {
    id: 5,
    title: 'Oficinas',
    imageURL: 'images/offices/office-6p.jpg',
    tag: 'office',
    tagIcon: 'people',
    capacity: 'de 4 a 6 personas',
    billingPeriod: 'Mes',
    priceLabel: 'desde',
    price: 80000,
    description:
      'Oficinas privadas para 4 o 6 personas, con ambiente cómodo, equipamiento ergonómico y espacio colaborativo.',
  },
  {
    id: 6,
    title: 'Salas de reuniones',
    imageURL: 'images/offices/meetings.jpg',
    tag: 'office',
    capacity: 'de 4 a 16 personas',
    tagIcon: 'people',
    billingPeriod: 'Hora',
    priceLabel: 'desde',
    price: 2500,
    description:
      'Organiza reuniones en espacios privados para 4, 6 o 16 personas, con comodidad y equipamiento adecuado.',
  },
  {
    id: 7,
    title: 'Oficina Virtual',
    tag: '',
    tagIcon: 'phone',
    billingPeriod: 'Mes',
    price: 5800,
    description:
      'Proporcionamos domicilio comercial, gestión de correspondencia y atención a tus clientes de manera telefónica o virtual via e-mail.',
  },
];

const ImageCard = ({
  title,
  imageURL,
  tag,
  capacity,
  tagIcon,
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

      <div className='flex items-center px-6 py-3 bg-gray-900'>
        <PeopleIcon />

        <h1 className='mx-3 text-lg font-semibold text-white'>{capacity}</h1>
      </div>

      <div className='px-6 py-4'>
        <h1 className='text-xl font-semibold text-gray-800'>{title}</h1>

        <p className='py-2 text-gray-700 mb-8'>{description}</p>

        {priceLabel && <span className='text-oldGold h-4'>{priceLabel}</span>}
        <h4 className='text-4xl font-semibold text-gray-800 opacity-90 mt-0'>
          <span className='text-oldGold'>$</span>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}

          <span className='text-base font-normal text-gray-400'>
            {`/${billingPeriod}`}
          </span>
        </h4>

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
  const officesPlans = PLANS.filter(({ tag }) => tag === 'office');
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
          {officesPlans.map((plan, index) => (
            <ImageCard {...plan} key={index} />
          ))}
        </div>

        <div className='border text-center rounded-md flex flex-col mt-10 p-6 items-center justify-content-center'>
          <h3 className='font-semibold text-2xl text-darkness mb-3'>
            Incluido en todos nuestros planes
          </h3>
          <p className='text-darkness text-lg'>
            Internet de alta velocidad - Cocina equipada - Coffe break - Locker
            propio - Mobiliario ergónomico - Servicio de impresión
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offices;
