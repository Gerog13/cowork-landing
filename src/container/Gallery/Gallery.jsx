import React, { useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
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
    // <section className="w-full py-32 bg-white" id="galeria">
    <section id="galeria">
      {/* <div className="max-w-6xl mx-auto text-left">
        <p className="text-blackness text-6xl"></p>
      </div> */}

      <div className="app__gallery flex justify-center items-center bg-white">
        <div className="app__gallery-content">
          <p className="text-lightGray text-6xl mb-6">Ubicación</p>
          <p className="flex items-center text-xl text-blackness text-opacity-90 ">
            <GoLocation className="mr-2 fill-blackness w-8 h-8" /> La Barraca
            Mall - Dorrego Mendoza, Las Cañas 1833, M5526
          </p>
          <p className="text-lightGray text-4xl mt-6 mb-6">Nuestros horarios</p>
          <p className="flex items-center text-lg text-blackness text-opacity-90 ">
            <BsClock className="mr-2 fill-blackness w-8 h-8" /> Lunes a
            Viernes, 8 am - 18 pm
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
                    className="w-full h-full object-cover cursor-pointer"
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
                    className="modal-box p-0 relative rounded-none overflow-hidden"
                    htmlFor=""
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
    </section>
  );
};

export default Gallery;
