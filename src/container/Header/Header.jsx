import React, { useEffect } from "react";
import work from "../../assets/images/work.svg";
import bg from "../../assets/images/bg-workbox.jpg";
import cowork from '../../assets/images/coworking.svg';
import Typical from "react-typical";
import TextTransition, { presets } from "react-text-transition";
import HeroImage from "../../assets/images/hero-image-04.jpeg";

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
    // <div
    //   className="hero min-h-screen"
    //   style={{ backgroundImage: `url(${HeroImage})` }}
    // >
    //   <div className="hero-overlay bg-opacity-0"></div>
    //   <div className="hero-content text-center">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-extrabold">Workbox</h1>
    //       <p className="mb-5">
    //         Trabajar eficientemente en un lugar confortable
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    <div class="hero min-h-screen bg-white">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={cowork}
          class="max-w-sm"
          alt="Tu lugar productivo"
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
