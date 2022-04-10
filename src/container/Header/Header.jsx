import React, { useEffect } from "react";
import work from "../../assets/images/work.svg";
import bg from "../../assets/images/bg-workbox.jpg";
import Typical from "react-typical";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["crecer", "trabajar", "conocer", "ayudar", "aprender"];

const Header = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    // <div className="hero min-h-screen bg-neonBlue pt-20">
    //   <div className="flex-col w-full justify-between items-center hero-content lg:flex-row-reverse">
    //     <img src={work} alt="Person working" className="max-w-xs sm:max-w-md md:max-w-lg mb-10 md:mb-0" />
    //     <div className="flex flex-col items-start">
    //       <Typical
    //         steps={["Bienvenido a WORKBOX"]}
    //         loop={1}
    //         style={{ fontFamily: "Roboto" }}
    //         wrapper="h1"
    //         className="text-3xl md:text-6xl text-white"
    //       />
    //       <h2 className="text-xl md:text-3xl text-gray-300 mt-2 mb-5 flex items-center justify-center">
    //         Tu espacio para
    //         <TextTransition
    //           text={TEXTS[index % TEXTS.length]}
    //           springConfig={presets.wobbly}
    //           className="text-green-300 ml-2"
    //         />
    //       </h2>
    //       <button className="btn btn-outline">Saber Más</button>
    //     </div>
    //   </div>
    // </div>
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <Typical
            steps={["Bienvenido a WORKBOX"]}
            loop={1}
            style={{ fontFamily: "Roboto"}}
            wrapper="h1"
            className="text-5xl md:text-7xl"
          />
          <h2 className="text-3xl mt-4 flex items-center justify-center">
            Tu espacio para
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
              className="text-neonBlue ml-2 text-center"
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
