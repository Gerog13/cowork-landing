import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Formik } from "formik";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div id="contacto" className="hero">
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000)
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Por favor ingrese un nombre"
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "El nombre no puede contener números o espacios"
          }

          if (!values.email) {
            errors.email = "Este campo es requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Dirección de email inválida";
          }
          
          return errors;
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form
            onSubmit={handleSubmit}
            className="w-2/5 h-80 flex items-center justify-center flex-col my-10 p-8 bg-slate-200 shadow-lg rounded-md"
          >
            <div>
              <label className="label" htmlFor="name">
                Nombre
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? (
                <span>{errors.name}</span>
              ) : null}
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <span>{errors.email}</span>
              ) : null}
            </div>
            <button className="btn btn-outline btn-primary mt-4" type="submit">
              Enviar
            </button>
            {isSubmitted ? (
              <p>Formulario enviado</p>
            ): null}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
