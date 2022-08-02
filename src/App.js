import React from "react";
import ScrollToTop from "react-scroll-to-top";
import arrow from './assets/images/arrow.svg'
import { Main, Mainui, Footer, Services, Contact, Plans } from "./container";

function App() {
  return (
    <div >
      <ScrollToTop component={<img style={{ width: '1.5rem', margin: '0 auto', padding: '2px'}} src={arrow} alt="Subir" />}  smooth />
      {/* <Main /> */}
      <Mainui />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
