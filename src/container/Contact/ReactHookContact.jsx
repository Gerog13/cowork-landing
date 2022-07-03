import React, { useState, useRef } from "react";
import Form from "../../assets/images/form2.svg";
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
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <section
      id="contacto"
      className="w-full py-10 xl:h-screen flex flex-col items-center bg-white"
    >
      <h1 className="text-3xl md:text-5xl text-black mt-14 font-extrabold">
        Se parte de Workbox
      </h1>
      <div className="px-4 md:px-0 h-full w-full flex justify-around items-center ">
        <form
          ref={form}
          className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5  flex items-start justify-around flex-col my-10 p-10 bg-gray-900 shadow-xl rounded-lg text-white"
          onSubmit={handleSubmit(sendEmail)}
        >
          <h2 className="self-center text-4xl font-bold mb-3">
            Reserva tu Lugar
          </h2>
          {/* Name */}
          <label className="label font-light text-xl text-white" htmlFor="name">
            Nombre Completo
          </label>
          <input
            className="input input-bordered input-primary w-full text-black font-semibold bg-white"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-md font-medium mt-3 text-red-400">
              Campo requerido
            </span>
          )}
          {/* Email */}
          <label
            className="label font-light text-xl text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="input input-bordered input-primary w-full text-black font-semibold bg-white"
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
          {/* Phone */}
          <label
            className="label font-light text-xl text-white"
            htmlFor="phone"
          >
            Telefono
          </label>
          <input
            id="phone"
            name="phone"
            className="input input-bordered input-primary w-full text-black font-semibold bg-white"
            {...register("phone")}
            type="tel"
          />
          {/* Message */}
          <label
            className="label font-light text-xl text-white"
            htmlFor="message"
          >
            Déjanos tu consulta
          </label>
          <textarea
            className="textarea textarea-primary text-black font-semibold bg-white w-full resize-none mb-8"
            {...register("message")}
          ></textarea>

          <input
            className="btn btn-primary btn-wide self-center"
            type="submit"
          />
          {isEmailSent ? (
            <div class="alert alert-success shadow-lg mt-4">
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
        <div className="w-2/5 hidden md:block">
          <img
            src={Form}
            alt="Reserva tu lugar"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
