import React, { useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import workbox1 from "../../assets/images/workbox1.jpeg";
import workbox2 from "../../assets/images/workbox2.jpeg";
import workbox3 from "../../assets/images/workbox3.jpeg";
import workbox4 from "../../assets/images/workbox4.jpeg";
import workbox5 from "../../assets/images/workbox5.jpeg";
import workbox6 from "../../assets/images/workbox6.jpeg";

import "./Gallery.css";

const galleryImages = [
  workbox1,
  workbox2,
  workbox3,
  workbox4,
  workbox5,
  workbox6,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex justify-center items-center bg-gray-900">
      <div className="app__gallery-content">
        <h1 className="text-5xl text-platinum font-semibold mb-4">Ubicación</h1>
        <a
          className="text-xl font-extralight text-gray-400"
          href="https://g.page/LaBarracaMall?share"
          alt="La barraca mall"
          target="_BLANK"
          rel="nofollow noopener noreferrer"
        >
          La Barraca Mall - Dorrego Mendoza, Las Cañas 1833, M5526
        </a>
        <h3 className="text-2xl text-platinum font-semibold mt-4">
          Nuestros horarios:
        </h3>
        <p className="text-xl font-extralight text-gray-400">
          Lunes a Viernes <br />
          8 am - 18 pm
        </p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex justify-center items-center"
              key={`gallery-image-${index + 1}`}
            >
              <label
                htmlFor={`my-modal-${index}`}
                style={{ height: "500px", width: "300px" }}
              >
                <img
                  src={image}
                  alt="gallery"
                  className="w-full h-full rounded-xl object-cover cursor-pointer"
                />
              </label>

              <input
                type="checkbox"
                id={`my-modal-${index}`}
                className="modal-toggle"
              />
              <label
                htmlFor={`my-modal-${index}`}
                className="modal cursor-pointer"
              >
                <label
                  className="modal-box p-0 relative overflow-hidden"
                  htmlFor=""
                  // style={{ height: "70vh", maxWidth: "70vw" }}
                >
                  <img
                    src={image}
                    alt="gallery"
                    className="w-full h-full object-cover"
                  />
                </label>
              </label>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
