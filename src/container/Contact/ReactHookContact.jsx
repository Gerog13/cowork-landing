import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import login from "../../assets/images/login.png";
import Fade from "react-reveal/Fade";

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
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <section id="contacto" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto text-left flex flex-col justify-between">
        <div>
          <hr className="border mt-4 mb-6 w-full text-center border-lightBlue" />
          <p className="text-blackness text-6xl mt-20">
            Forma parte de Workbox
          </p>
        </div>
        <div className="w-full flex justify-between mt-10">
          <form
            ref={form}
            className="w-full flex items-start justify-around flex-col mt-10 p-10 bg-lightGray shadow-xl text-white"
            onSubmit={handleSubmit(sendEmail)}
          >
            <p className="text-white self-center text-5xl mb-6">
              Reserva tu lugar
            </p>
            <label
              className="label font-light text-xl text-white"
              htmlFor="name"
            >
              Nombre Completo
            </label>
            <input
              className="input input-bordered input-primary w-full text-black font-semibold bg-white rounded-none "
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-md font-medium mt-3 text-red-400">
                Campo requerido
              </span>
            )}
            <label
              className="label font-light text-xl text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="input input-bordered input-primary w-full text-black font-semibold bg-white rounded-none"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Formato inválido",
                },
              })}
              type="email"
            />
            {errors.email && (
              <span className="text-md font-medium mt-3 text-red-400">
                Dirección de correo electrónico inválida
              </span>
            )}
            <label
              className="label font-light text-xl text-white"
              htmlFor="phone"
            >
              Telefono
            </label>
            <input
              id="phone"
              name="phone"
              className="input input-bordered input-primary w-full text-black font-semibold bg-white rounded-none"
              {...register("phone")}
              type="tel"
            />
            <label
              className="label font-light text-xl text-white"
              htmlFor="message"
            >
              Déjanos tu consulta
            </label>
            <textarea
              className="textarea textarea-primary text-black font-semibold bg-white rounded-none w-full resize-none mb-8"
              {...register("message")}
            ></textarea>

            <input
              className="btn btn-primary btn-wide self-center rounded-none bg-blackness border-none text-white hover:bg-black hover:bg-opacity-80 transition-all duration-150 ease"
              type="submit"
            />
            {isEmailSent ? (
              <div class="alert alert-success shadow-lg mt-4 rounded-none">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Email enviado correctamente</span>
                </div>
              </div>
            ) : null}
          </form>
          <Fade bottom duration={2000}>
            <div className="w-full">
              <img
                src={login}
                alt="Forma parte de workbox"
                className="w-64 md:w-full h-full object-cover lg:ml-10"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
