import React from "react";
import logo from "../../assets/images/letterslogo.png";

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
              <div className="mt-6 grid grid-cols-2 gap-6">
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
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-1/3 mt-6 lg:mt-0">
            <h3 className="text-gray-700 dark:text-white font-semibold">
              Nuestra ubicación
            </h3>
            <div className="w-full flex flex-col">
              <iframe
                title="La Barraca Mall"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408.2430282153405!2d-68.82240795278774!3d-32.91441812072326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e095097de9a85%3A0x5d63cc2efae8b1c1!2sLa%20Barraca%20Mall!5e0!3m2!1ses-419!2sar!4v1667216690807!5m2!1ses-419!2sar"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                Las Cañas 1833, Dorrego Mendoza <br /> La Barraca Mall - Local
                L16
              </span>
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
  );
};

export default Footer;
