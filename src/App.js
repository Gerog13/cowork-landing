import React, { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import arrow from './assets/images/arrow.svg'

// import useScrollSnap from "react-use-scroll-snap";

import { Main, Footer, Gallery, Services, Header, Contact, Plans } from "./container";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  // const scrollRef = useRef(null);
  // ref={scrollRef} -> use this in the main div
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (
    <div >
      {/* <Navbar />
      <Header />  */}
      <ScrollToTop component={<img style={{ width: '1.5rem', margin: '0 auto', padding: '2px'}} src={arrow} alt="Subir" />}  smooth />
      <Main />
      <Services />
      <Plans />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
