const PRICES = [
  {
    id: 1,
    name: 'Pase por el día',
    type: 'open-space',
    billingPeriod: 'Día',
    price: 3700,
    description:
      'Disfrutá de una jornada laboral completa, aprovechando todos los beneficios que Workbox brinda.',
    features: [
      'Todas las áreas comunes incluidas',
      'Conexión Wi-Fi de alta velocidad',
      'Ambiente de trabajo colaborativo',
      'Cocina con café y snacks',
    ],
  },
  {
    id: 2,
    name: 'Pase mensual',
    type: 'open-space',
    billingPeriod: 'Mes',
    price: 25000,
    description:
      'Acceso ilimitado en horario de atención para coworkers que desean aprovechar al máximo nuestras instalaciones.',
    features: [
      'Todas las áreas comunes incluidas',
      'Conexión Wi-Fi de alta velocidad',
      'Ambiente de trabajo colaborativo',
      'Cocina con café y snacks',
      '1 hora de sala de reuniones al mes',
    ],
  },
  {
    id: 3,
    name: 'Escritorio Dedicado',
    imageURL: 'images/offices/fixed-spot.jpg',
    type: 'office',
    capacity: '2 personas',
    billingPeriod: 'Mes',
    price: 25000,
    description:
      'Espacio de trabajo exclusivo mensual para 2 personas, con escritorios fijos y mobiliario ergonómico.',
    features: [
      'Espacio para 2 personas',
      'Uso exclusivo y fijo',
      'Mobiliario ergonómico',
      'Conexión Wi-Fi de alta velocidad',
      'Acceso a áreas comunes',
    ],
  },
  {
    id: 4,
    name: 'Oficinas',
    imageURL: 'images/offices/office-6p.jpg',
    type: 'office',
    capacity: 'de 4 a 6 personas',
    billingPeriod: 'Mes',
    priceLabel: 'desde',
    price: 97000,
    description:
      'Oficinas privadas para 4 o 6 personas, con ambiente cómodo, equipamiento ergonómico y espacio colaborativo.',
  },
  {
    id: 5,
    name: 'Salas de reuniones',
    imageURL: 'images/offices/meetings.jpg',
    type: 'office',
    capacity: 'de 4 a 16 personas',
    billingPeriod: 'Hora',
    priceLabel: 'desde',
    price: 3000,
    description:
      'Organiza reuniones en espacios privados para 4, 6 o 16 personas, con comodidad y equipamiento adecuado.',
  },
  {
    id: 6,
    name: 'Oficina Virtual',
    type: 'virtual-office',
    description:
      'Brindamos domicilio comercial, gestión de correspondencia y atención telefónica o virtual por e-mail para tus clientes.',
    price: 3500,
    billingPeriod: 'Mes',
  },
];

export default PRICES;
