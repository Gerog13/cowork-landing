import React from 'react';
import WorkboxLogo from '../../components/workboxLogo';
import {
  BuildingOffices2,
  EnvelopIcon,
  LocationIcon,
  PhoneIcon,
} from '../../components/Icons';

const Footer = () => {
  return (
    <footer className='bg-black pt-6'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex justify-between'>
          <div className='w-full -mx-6 lg:w-2/5 flex flex-col items-start md:items-center justify-center'>
            <div className='px-6'>
              <div>
                <a
                  href='/'
                  className='text-xl font-bold text-white hover:text-gray-300'
                >
                  <WorkboxLogo textColor='#FFFFFF' />
                </a>
              </div>

              <div className='mt-6 grid grid-cols-2 gap-6'>
                <div>
                  <h3 className='lg:text-lg font-semibold text-white'>
                    Contacto
                  </h3>

                  <div className='mt-2 text-sm text-gray-400 flex items-center'>
                    <span className='mr-2'>
                      <PhoneIcon size='sm' />
                    </span>
                    +54 9 261 777 7257
                  </div>
                  <div className='mt-2 text-sm text-gray-400 flex items-center'>
                    <span className='mr-2'>
                      <EnvelopIcon size='sm' />
                    </span>
                    workboxmendoza@gmail.com
                  </div>
                </div>
              </div>
              <div className='mt-6 w-80 md:mt-8'>
                <h3 className='text-white lg:text-lg font-semibold'>
                  ¡Seguinos!
                </h3>

                <div className='flex mt-2 -mx-1.5 '>
                  <a
                    className='mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-oldGold'
                    href='https://www.instagram.com/workboxmza/?hl=es-la'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-8 h-8'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    className='mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-oldGold'
                    href='https://www.linkedin.com/company/work-box-espacio-de-conexi%C3%B3n/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-8 h-8'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z'
                        fill='currentColor'
                      />
                      <path
                        d='M7.2 9.6001H4V19.2001H7.2V9.6001Z'
                        fill='currentColor'
                      />
                      <path
                        d='M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>

                  <a
                    className='mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-oldGold'
                    href='https://www.facebook.com/Workbox-112111401541793'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-8 h-8'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 xl:w-1/3 mt-6 lg:mt-0'>
            <h3 className='lg:text-lg font-semibold text-white mb-2'>
              Nuestra ubicación
            </h3>
            <div className='w-full flex flex-col'>
              <iframe
                title='La Barraca Mall'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408.2430282153405!2d-68.82240795278774!3d-32.91441812072326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e095097de9a85%3A0x5d63cc2efae8b1c1!2sLa%20Barraca%20Mall!5e0!3m2!1ses-419!2sar!4v1667216690807!5m2!1ses-419!2sar'
                height='300'
                style={{ border: '0' }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-lg mb-2'
              ></iframe>
            </div>
            <div className='mt-2 text-sm text-gray-400 flex items-center'>
              <span className='mr-1'>
                <LocationIcon size='sm' />
              </span>
              Las Cañas 1833, Dorrego Mendoza
            </div>
            <div className='mt-2 text-sm text-gray-400 flex items-center'>
              <span className='mr-1'>
                <BuildingOffices2 size='sm' />
              </span>
              La Barraca Mall - Local L16
            </div>
          </div>
        </div>

        <hr className='h-px my-6 border-none bg-gray-700' />

        <div>
          <p className='text-center text-white'>
            © Workbox 2022 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
