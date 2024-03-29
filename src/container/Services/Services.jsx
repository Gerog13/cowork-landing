import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { GiLockers } from 'react-icons/gi';
import { SiBuymeacoffee } from 'react-icons/si';
import { BsMailbox } from 'react-icons/bs';
import { MdOutlineChair } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { MegaphoneIcon } from '../../components/Icons';

const Services = () => {
  return (
    <>
      <section id='servicios' className='bg-white pb-10'>
        <div className='container px-6 py-10 mx-auto tracking-tight'>
          <h2 className='text-3xl font-semibold lg:text-4xl text-darkness'>
            ¿Qué ofrecemos?
          </h2>

          <p className='mt-4 text-gray-800 text-lg opacity-80 xl:mt-6'>
            Workbox ofrece servicios en una ubicación privilegiada con
            estacionamiento, fácil acceso y variedad de negocios. Disfrutá de
            patio de comidas, supermercado, farmacia, cajeros, gimnasio y
            seguridad 24/7.
          </p>

          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3'>
            <div className='space-y-3 shadow-md p-6 rounded-lg'>
              <span className='inline-block p-3 text-darkness bg-oldGold rounded-full'>
                <FaWifi className='w-6 h-6' />
              </span>

              <p className='text-2xl font-semibold capitalize text-darkness'>
                Wifi
              </p>

              <p className='text-gray-800'>
                Conexión alta velocidad, navegá y trabajá sin limitaciones ni
                interrupciones.
              </p>
            </div>

            <div className='space-y-3 shadow-md p-6 rounded-lg'>
              <span className='inline-block p-3 text-darkness bg-oldGold rounded-full'>
                <GiLockers className='w-6 h-6' />
              </span>

              <p className='text-2xl font-semibold capitalize text-darkness'>
                Lockers
              </p>

              <p className='text-gray-800'>
                Nuestros casilleros te proporcionan un espacio seguro para
                almacenar tus pertenencias.
              </p>
            </div>

            <div className='space-y-3 shadow-md p-6 rounded-lg'>
              <span className='inline-block p-3 text-darkness bg-oldGold rounded-full'>
                <SiBuymeacoffee className='w-6 h-6' />
              </span>

              <p className='text-2xl font-semibold text-darkness'>
                Coffee break
              </p>

              <p className='text-gray-800'>
                Disfrutá de té, café, mate y variedad de bebidas.
              </p>
            </div>

            <div className='space-y-3 shadow-md p-6 rounded-lg'>
              <span className='inline-block p-3 text-darkness bg-oldGold rounded-full'>
                <BsMailbox className='w-6 h-6' />
              </span>

              <p className='text-2xl font-semibold text-darkness'>
                Recepción de correo
              </p>

              <p className='text-gray-800'>
                Enviá tu correspondencia a Workbox, nosotros la recibimos por
                vos!
              </p>
            </div>

            <div className='space-y-3 shadow-md p-6 rounded-lg'>
              <span className='inline-block p-3 text-darkness bg-oldGold rounded-full'>
                <MdOutlineChair className='w-6 h-6' />
              </span>

              <p className='text-2xl font-semibold capitalize text-darkness'>
                Mobiliario
              </p>

              <p className='text-gray-800'>
                Experimentá el confort con nuestro mobiliario ergonómico y de
                calidad superior.
              </p>
            </div>

            <div className='space-y-3 shadow-md p-6 rounded-lg'>
              <span className='inline-block p-3 text-darkness bg-oldGold rounded-full '>
                <IoIosPeople className='w-6 h-6' />
              </span>

              <p className='text-2xl font-semibold text-darkness'>
                Salas de reuniones
              </p>

              <p className='text-gray-800'>
                Salas de reuniones para 4, 6 o 16 personas, ideales para
                cualquier tipo de encuentro y colaboración.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 tracking-tight'>
        <div className='container flex flex-col items-center px-4 py-12 mx-auto text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-darkness flex items-center'>
            Organizá tu evento con nosotros{' '}
            <span className='text-oldGold ml-2'>
              <MegaphoneIcon size={'lg'} />
            </span>
          </h2>

          <p className='block max-w-2xl mt-4 text-xl text-gray-800 opacity-90'>
            Descubrí cómo nuestro espacio de coworking se adapta a tus
            necesidades para celebrar eventos únicos, desde talleres y charlas
            hasta encuentros empresariales y presentaciones. ¡Convertí a Workbox
            en el escenario perfecto para tu próximo evento!
          </p>

          <div className='mt-6'>
            <div className='inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3'>
              <a
                href='https://api.whatsapp.com/send?phone=+5492617777257&text=%C2%A1Buenas!%20Quiero%20realizar%20mi%20evento%20en%20Workbox%20y%20deseo%20obtener%20mas%20informaci%C3%B3n.%F0%9F%93%A3'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-darkness bg-oldGold hover:bg-[#cca712] transition-all duration-200 ease'
              >
                <BsTelephoneOutbound />
                <span className='mx-2 tracking-tight'>Reservar</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
