import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import arrow from './assets/images/arrow.svg';
import Logo from '../src/assets/images/logo-r.png';

import {
  Main,
  Footer,
  Services,
  Contact,
  PlansV2,
  Offices,
  VirtualOffice,
} from './container';
import MetaTags from 'react-meta-tags';
import Matterport from './container/Matterport/Matterport';

function App() {
  return (
    <div>
      <MetaTags>
        <meta
          property='og:description'
          content='Bienvenido a Workbox un espacio de conexión, pensado para que puedas desarrollar todas tus actividades en un cowork a la medida de tus necesidades.'
        />
        <meta property='og:title' content='Workbox' />
        <meta property='og:image' content={Logo} />
      </MetaTags>
      <ScrollToTop
        component={
          <img
            style={{ width: '1.5rem', margin: '0 auto', padding: '2px' }}
            src={arrow}
            alt='Subir'
          />
        }
        smooth
      />
      <Main />
      <Matterport />
      <Services />
      <PlansV2 />
      <Offices />
      <VirtualOffice />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
