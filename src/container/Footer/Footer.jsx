import React from "react";
import logo from "../../assets/images/letterslogo.png";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex justify-between">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a
                  href="/"
                  className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <img src={logo} alt="Workbox logo" height={250} width={250} />
                </a>
              </div>

              <p className="max-w-md text-gray-500 dark:text-gray-400">
                Espacio de conexión
              </p>

              <div className="flex w-20 justify-between mt-4">
                <a
                  className="text-black hover:text-oldGold transition-all ease-out duration-300"
                  href="https://wa.me/2613004404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp className="text-xl" />
                </a>

                <a
                  className=" text-black hover:text-oldGold transition-all ease-out duration-300"
                  href="https://www.instagram.com/workboxmza/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="text-xl" />
                </a>

                <a
                  className=" text-black hover:text-oldGold transition-all ease-out duration-300"
                  href="https://www.facebook.com/Workbox-112111401541793"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contacto
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  +54 9 261 777 7257
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  workboxmendoza@gmail.com
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Las Cañas 1833, Dorrego Mendoza <br /> La Barraca Mall - Local
                  L16
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Workbox 2022 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
    // <footer className="flex bg-blackness w-full p-10 items-center justify-between">
    //   <div className="flex flex-col items-center">
    //     <img
    //       src={logo}
    //       className="order-first mb-4 md:mb-0"
    //       alt="Workbox espacios de trabajo"
    //       height={300}
    //       width={300}
    //     />
    //     <div className="flex w-52 mt-6 items-center justify-around ">
    //       <a
    //         className="rounded-full p-4 text-black bg-white hover:bg-lightGray hover:text-white hover:shadow-md transition-all ease-out duration-300"
    //         href="https://wa.me/2613004404"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <BsWhatsapp className="text-2xl" />
    //       </a>
    //       <a
    //         className="rounded-full p-4 text-black bg-white hover:bg-lightGray hover:text-white hover:shadow-md transition-all ease-out duration-300"
    //         href="https://www.instagram.com/workboxmza/?hl=es-la"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <BsInstagram className="text-2xl" />
    //       </a>
    //       <a
    //         className="rounded-full p-4 text-black bg-white hover:bg-lightGray hover:text-white hover:shadow-md transition-all ease-out duration-300"
    //         href="https://www.facebook.com/Workbox-112111401541793"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <BsFacebook className="text-2xl" />
    //       </a>
    //     </div>
    //   </div>
    //   <div>
    //     <iframe
    //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.6916723910292!2d-68.82253625104381!3d-32.914468672643615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e095097de9a85%3A0x5d63cc2efae8b1c1!2sLa%20Barraca%20Mall!5e0!3m2!1ses-419!2sar!4v1657242842370!5m2!1ses-419!2sar"
    //       width="400"
    //       height="300"
    //       title="La barraca"
    //       style={{ border: 0 }}
    //       allowFullScreen=""
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade"
    //     />
    //   </div>
    // </footer>
  );
};

export default Footer;
