import React from "react";
import { Footer, Gallery, Services, Header, Contact } from "./container"
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Header /> 
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
