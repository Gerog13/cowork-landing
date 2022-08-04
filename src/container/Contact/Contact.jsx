import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
        }
      );
    reset();
  };

  return (
    <div id="contacto" className="flex flex-col items-center pt-10 bg-gray-100">
      <h2 className="container text-3xl px-6 py-10 font-semibold lg:text-4xl text-blackness">
        Contacto
      </h2>
      <div className="container px-6 pb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-start">
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="px-6 py-4 bg-white rounded-md shadow-md w-full dark:bg-gray-800"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
            Reserva tu lugar
          </h2>
          <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
            Llená el siguiente formulario y nos estaremos contactando con vos a
            la brevedad.
          </p>

          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center px-4 py-3 transition-colors duration-200 transform rounded-md bg-oldGold">
              <svg
                className="w-5 h-5 fill-darkness"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mt-2 text-darkness opacity-90 font-medium">
                La Barraca Mall, Local L16
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-4 py-3 text-gray-900 transition-colors duration-200 transform rounded-md bg-oldGold">
              <svg
                className="w-5 h-5 fill-darkness"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <span className="mt-2 text-darkness opacity-90 font-medium">
                +54 9 261 777 7257
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-4 py-3 text-gray-900 transition-colors duration-200 transform rounded-md bg-oldGold">
              <svg
                className="w-5 h-5 fill-darkness"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>

              <span className="mt-2 text-darkness opacity-90 font-medium break-all">
                workboxmendoza@gmail.com
              </span>
            </div>
          </div>

          <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Nombre*
                </label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-md font-medium mt-3 text-red-400">
                    Campo requerido
                  </span>
                )}
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  E-mail*
                </label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Formato inválido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-md font-medium mt-3 text-red-400">
                    Correo electrónico inválido
                  </span>
                )}
              </div>
            </div>

            <div className="w-full mt-4 ">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Teléfono
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40"
                type="phone"
                {...register("phone", {
                  pattern: {
                    value:
                      /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
                    message: "Número inválido",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-md font-medium mt-3 text-red-400">
                  Número telefónico inválido
                </span>
              )}
            </div>
            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Mensaje
              </label>

              <textarea
                {...register("message")}
                className="resize-none block w-full h-20 lg:h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-oldGold focus:ring-oldGold focus:outline-none focus:ring focus:ring-opacity-40"
              ></textarea>
            </div>

            {isEmailSent ? (
              <div className="flex justify-center mt-6">
                <button
                  className="flex items-center px-20 py-2 text-white transition-colors duration-200 transform bg-green-800 rounded-md"
                  disabled
                >
                  <svg
                    className="w-6 h-6 text-white fill-current mr-2"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                  Enviado correctamente
                </button>
              </div>
            ) : (
              <div className="flex justify-center mt-6">
                <button className="px-20 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Enviar
                </button>
              </div>
            )}
          </div>
        </form>
        <div className="w-full mt-10 lg:mt-0 flex items-center justify-center">
          <div className="w-full lg:w-3/4 flex flex-col self-center">
            <iframe
              title="La barraca mall"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.5530299886987!2d-68.82192615117098!3d-32.91456744295352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e095097de9a85%3A0x5d63cc2efae8b1c1!2sLa%20Barraca%20Mall!5e0!3m2!1ses-419!2sar!4v1658089060140!5m2!1ses-419!2sar"
              height="450"
              className="border-0 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <span className="pt-4 text-gray-800">
              Las Cañas 1833, Dorrego Mendoza <br /> La barraca mall{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
