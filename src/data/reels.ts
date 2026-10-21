import { ReelStory, MoteroReview } from '@/types';

export const KOUNAHK_REELS: ReelStory[] = [
  {
    id: 'reel-arc',
    title: 'Prueba de Diluvio Extremo en la ARC',
    route: 'Autopista Regional del Centro • Caracas a Valencia',
    location: 'Tramo Las Tejerías - Guacara',
    duration: '0:58',
    description: '120 km/h bajo una tormenta tropical con ráfagas de viento y camiones levantando olas de agua. Cero filtraciones, llamadas 100% claras y música sin interrupción.',
    modelTested: 'FreedConn FX Pro (IP67)',
    repsCount: '184K vistas',
    likes: '14.2K',
    badge: '🌧️ Test de Lluvia Extrema',
    gradient: 'from-orange-600/80 via-zinc-900 to-black'
  },
  {
    id: 'reel-merida',
    title: 'Caravana de 8 Motos en Curvas de Alta Montaña',
    route: 'Carretera Trasandina • Barinas - Apartaderos - Mérida',
    location: 'Paso Collado del Cóndor (4.118 msnm)',
    duration: '1:15',
    description: 'Probamos la tecnología Mesh conectando 8 motocicletas en curvas cerradas de montaña con niebla densa y -2°C. La reconexión automática funcionó al instante cada vez que nos separábamos.',
    modelTested: 'FreedConn FX Pro Mesh',
    repsCount: '240K vistas',
    likes: '19.5K',
    badge: '🏔️ Test de Altitud & Mesh',
    gradient: 'from-blue-600/80 via-zinc-900 to-black'
  },
  {
    id: 'reel-mochima',
    title: 'Grabando la Costa de Mochima en 2K desde el Casco',
    route: 'Ruta Costera • Puerto La Cruz a Cumaná',
    location: 'Mirador de Santa Fe, Sucre',
    duration: '1:04',
    description: 'Sin cables molestos ni GoPro pesada en el casco. Capturamos los colores del mar en 2K a 30fps y transferimos los clips al teléfono en la parada a comer empanadas.',
    modelTested: 'FreedConn R3 2K Wi-Fi',
    repsCount: '315K vistas',
    likes: '26.8K',
    badge: '📹 Test de Cámara 2K',
    gradient: 'from-emerald-600/80 via-zinc-900 to-black'
  }
];

export const MOTERO_REVIEWS: MoteroReview[] = [
  {
    id: 'rev-1',
    name: 'Carlos Mendoza',
    bike: 'Kawasaki KLR 650',
    city: 'Caracas (Distrito Capital)',
    model: 'FreedConn FX Pro',
    rating: 5,
    comment: 'Hermano, soy de los que rueda todos los fines de semana a Los Teques y la Colonia Tovar. El FX Pro se escucha brutal incluso con el escape ruidoso del KLR. El envío por Zoom me llegó en 24 horas a Caracas.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Alejandro Colmenares',
    bike: 'V-Strom 650 XT',
    city: 'San Cristóbal (Táchira)',
    model: 'FreedConn R3 2K',
    rating: 5,
    comment: 'La calidad de video del R3 me dejó loco. Lo uso para motovlog y como cámara de seguridad por si algún loco se me cruza en la calle. Poder bajar los videos por Wi-Fi al cel es un 10/10.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Daniela & Gabriel',
    bike: 'Yamaha MT-07',
    city: 'Valencia (Carabobo)',
    model: 'FreedConn KY-Pro (Par)',
    rating: 5,
    comment: 'Compramos dos KY-Pro para viajar en pareja y la función de compartir la música de Spotify es lo mejor que nos ha pasado. Ya no tenemos que ir gritando en los semáforos.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Javier Rodríguez',
    bike: 'Bera SBR 150',
    city: 'Maracaibo (Zulia)',
    model: 'FreedConn T-COM SC',
    rating: 5,
    comment: 'Para trabajar en la calle todos los días en Maracaibo bajo 38°C de sol y lluvia de repente, el T-COM SC no tiene rival. La pantalla LCD me ayuda a saber cuánta pila me queda. 100% recomendado.',
    verified: true
  }
];
