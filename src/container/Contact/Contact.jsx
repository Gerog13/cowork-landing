import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import WorkboxLogo from '../../components/workboxLogo';
import { EnvelopIcon, LocationIcon, PhoneIcon } from '../../components/Icons';

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (data) => {
    setIsEmailSent(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setIsEmailSent(false);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setTimeout(() => {
            setIsEmailSent(false);
          }, 1000);
        }
      );
    reset();
  };

  return (
    <section className='bg-gray-100' id='contacto'>
      <div className='container px-6 py-14 mx-auto'>
        <div className='lg:flex lg:-mx-6'>
          <div className='lg:w-1/2 lg:mx-6'>
            <div className='flex flex-col items-start'>
              <h1 className='text-3xl font-semibold text-black apitalize lg:text-4xl xl:text-[3.5rem]'>
                Sé parte de Workbox
              </h1>
            </div>

            <div className='mt-6 md:mt-8 lg:mt-10 space-y-3'>
              <p className='flex items-center -mx-2 lg:text-lg'>
                <span className='text-oldGold'>
                  <LocationIcon />
                </span>

                <span className='mx-2 text-gray-700 w-full'>
                  Las Cañas 1833, La Barraca Mall, Mendoza
                </span>
              </p>

              <p className='flex items-center -mx-2 lg:text-lg'>
                <span className='text-oldGold'>
                  <PhoneIcon />
                </span>

                <span className='mx-2 text-gray-700 truncate  w-full'>
                  +54 9 261 777 7257
                </span>
              </p>

              <p className='flex items-center -mx-2 lg:text-lg'>
                <span className='text-oldGold'>
                  <EnvelopIcon />
                </span>

                <span className='mx-2 text-gray-700 truncate w-full'>
                  workboxmendoza@gmail.com
                </span>
              </p>
            </div>
          </div>

          <div className='lg:w-1/2 lg:mx-6'>
            <div className='w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50'>
              <h1 className='text-lg font-medium text-gray-700'>
                Reserva tu lugar
              </h1>

              <form
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
                className='mt-6'
              >
                <div className='mt-6 '>
                  <div className='items-center -mx-2 md:flex'>
                    <div className='w-full mx-2'>
                      <label className='block mb-2 text-sm font-medium text-gray-600'>
                        Nombre*
                      </label>

                      <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40'
                        type='text'
                        {...register('name', { required: true })}
                      />
                      {errors.name && (
                        <span className='text-md font-medium mt-3 text-red-400'>
                          Campo requerido
                        </span>
                      )}
                    </div>

                    <div className='w-full mx-2 mt-4 md:mt-0'>
                      <label className='block mb-2 text-sm font-medium text-gray-600'>
                        E-mail*
                      </label>

                      <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40'
                        type='email'
                        {...register('email', {
                          required: 'required',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Formato inválido',
                          },
                        })}
                      />
                      {errors.email && (
                        <span className='text-md font-medium mt-3 text-red-400'>
                          Correo electrónico inválido
                        </span>
                      )}
                    </div>
                  </div>

                  <div className='w-full mt-4 '>
                    <label className='block mb-2 text-sm font-medium text-gray-600'>
                      Teléfono
                    </label>
                    <input
                      className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40'
                      type='phone'
                      {...register('phone', {
                        pattern: {
                          value:
                            /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
                          message: 'Número inválido',
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className='text-md font-medium mt-3 text-red-400'>
                        Número telefónico inválido
                      </span>
                    )}
                  </div>
                  <div className='w-full mt-4'>
                    <label className='block mb-2 text-sm font-medium text-gray-600'>
                      Mensaje
                    </label>

                    <textarea
                      {...register('message')}
                      className='resize-none block w-full h-20 lg:h-40 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40'
                    ></textarea>
                  </div>

                  {isEmailSent ? (
                    <div className='flex justify-center mt-6'>
                      <button
                        className='flex items-center px-20 py-2 text-white transition-colors duration-200 transform bg-green-800 rounded-md'
                        disabled
                      >
                        <svg
                          className='w-6 h-6 text-white fill-current mr-2'
                          viewBox='0 0 40 40'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z' />
                        </svg>
                        Enviado
                      </button>
                    </div>
                  ) : (
                    <div className='flex justify-center mt-6'>
                      <button className='mt-8 w-full tracking-tight px-4 py-2 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none'>
                        Enviar
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
