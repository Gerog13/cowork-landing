import { Link } from 'react-scroll';

const VirtualOffice = () => {
  const virtualOffice = {
    title: 'Oficina Virtual',
    description:
      'Brindamos domicilio comercial, gestión de correspondencia y atención telefónica o virtual por e-mail para tus clientes.',
    price: 2900,
    billingPeriod: 'Mes',
  };
  return (
    <section id='oficinaVirtual' className='bg-white pb-14'>
      <div className='container px-6 py-8 mx-auto'>
        <div className='flex flex-col items-start justify-between'>
          <h2 className='text-3xl font-bold lg:text-4xl text-darkness'>
            Impulsa tu negocio con nuestra Oficina Virtual
          </h2>
          <p className='mt-4 mb-16 text-gray-800 text-lg opacity-80'>
            Simplificá tus operaciones comerciales y fortalece tu presencia
            empresarial con nuestro completo servicio de oficina virtual.
          </p>
          <div className='max-w-md border rounded-lg'>
            <div className='p-6'>
              <h1 className='text-2xl font-medium text-gray-700'>
                {virtualOffice.title}
              </h1>

              <h4 className='text-4xl font-semibold text-gray-800 opacity-90 mt-6'>
                <span className='text-oldGold'>$</span>
                {virtualOffice.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}

                <span className='text-base font-normal text-gray-400'>
                  {`/${virtualOffice.billingPeriod}`}
                </span>
              </h4>

              <p className='mt-4 text-gray-500'>{virtualOffice.description}</p>
            </div>

            <div className='p-6'>
              <Link to='contacto' spy={true} smooth={true} duration={100}>
                <button className='w-full mt-8 tracking-tight px-4 py-2 font-medium text-darkness capitalize transition-colors duration-200 transform bg-oldGold rounded-md hover:bg-[#cca712] focus:outline-none'>
                  Contratar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualOffice;
