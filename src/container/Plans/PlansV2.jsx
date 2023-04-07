import React from 'react';
import { Link } from 'react-scroll';

import 'react-multi-carousel/lib/styles.css';
import {
  ClockIcon,
  LocationIcon,
  PeopleIcon,
  PhoneIcon,
} from '../../components/Icons';

const PLANS = [
  {
    id: 1,
    title: 'Pase por el día',
    tag: 'open-space',
    tagIcon: 'clock',
    billingPeriod: 'Día',
    price: 3000,
    description:
      'Disfrutá de una jornada laboral completa, aprovechando todos los beneficios que Workbox brinda.',
    features: [
      'Todas las áreas comunes incluidas',
      'Conexión Wi-Fi de alta velocidad',
      'Ambiente de trabajo colaborativo',
      'Cocina con café y snacks',
    ],
  },
  {
    id: 3,
    title: 'Pase mensual',
    tag: 'open-space',
    tagIcon: 'clock',
    billingPeriod: 'Mes',
    price: 21000,
    description:
      'Acceso ilimitado en horario de atención para coworkers que desean aprovechar al máximo nuestras instalaciones.',
    features: [
      'Todas las áreas comunes incluidas',
      'Conexión Wi-Fi de alta velocidad',
      'Ambiente de trabajo colaborativo',
      'Cocina con café y snacks',
      '1 hora de sala de reuniones al mes',
    ],
  },
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
      'Espacio semi-privado fijo y de uso exclusivo para 2 personas, equipado con el mejor mobiliario.',
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
      'Disfrutá de un ambiente privado y agradable para 6 personas, con equipamiento ergonómico premium.',
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
      'Programa reuniones privadas con tu equipo o clientes en un espacio cómodo y adecuadamente equipado.',
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

const FeatureCard = ({
  title,
  tag,
  tagIcon,
  price,
  description,
  billingPeriod,
  features,
}) => {
  const getTagIcon = ({ tagIcon, size }) => {
    switch (tagIcon) {
      default:
        return null;
      case 'clock':
        return <ClockIcon size={size} />;
      case 'people':
        return <PeopleIcon />;
      case 'phone':
        return <PhoneIcon />;
      case 'location':
        return <LocationIcon size={size} />;
    }
  };

  return (
    <div className='max-w-md border rounded-lg'>
      <div className='p-6'>
        <h1 className='text-2xl font-medium text-gray-700'>{title}</h1>

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
            features.map((feature) => (
              <div className='flex items-center'>
                <span className='h5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-oldGold'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    />
                  </svg>
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
  const openSpacePlans = PLANS.filter(({ tag }) => tag === 'open-space');
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

        <div className='flex mt-16 justify-between'>
          {openSpacePlans.map((plan, index) => (
            <FeatureCard {...plan} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansV2;
