const Matterport = () => {
  return (
    <section id='oficinas' className='bg-gray-100'>
      <div className='container px-6 py-10 mx-auto tracking-tight'>
        <div>
          <h2 className='text-3xl font-bold lg:text-4xl text-darkness'>
            Explorá Workbox en 360°
          </h2>
          <p className='mt-4 text-gray-800 text-lg opacity-80'>
            Descubrí nuestro espacio de innovación y colaboración a través de un
            recorrido virtual único, creado por
            <a
              className='ml-1 font-bold link text-[#724cf5]'
              href='https://www.roomica.com/'
              rel='noreferrer'
              target='_blank'
            >
              Roomica
            </a>
            ."
          </p>
        </div>
      </div>
      <div className='lg:h-[75vh]'>
        <iframe
          width='100%'
          height='100%'
          src='https://my.matterport.com/show/?m=KBADJysGXmZ&play=0&mls=1&mt=0&lang=es'
          frameborder='0'
          enablefullscreen
          enable='xr-spatial-tracking'
          title='metterboard-workbox'
        ></iframe>
      </div>
    </section>
  );
};

export default Matterport;
