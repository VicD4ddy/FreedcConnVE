'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Search, ExternalLink, Navigation } from 'lucide-react';

export const DistributorsSection: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedRadius, setSelectedRadius] = useState('50');
  const [selectedCity, setSelectedCity] = useState('todos');

  const stores = [
    {
      id: 'ccs-1',
      name: 'FreedConn Venezuela • Sede Principal & Showroom',
      city: 'Caracas',
      address: 'Centro Comercial Chacao, Nivel Comercio, Local 14',
      phone: '+58 412 123 4567',
      hours: 'Lun a Sáb: 9:00 AM - 6:00 PM',
      lat: 10.491,
      lng: -66.853,
    },
    {
      id: 'val-1',
      name: 'Moto Touring Valencia • Distribuidor Autorizado',
      city: 'Valencia',
      address: 'Av. Bolívar Norte, Sector Los Sauces, Edif. Biker',
      phone: '+58 414 987 6543',
      hours: 'Lun a Vie: 8:30 AM - 5:30 PM',
      lat: 10.218,
      lng: -68.006,
    },
    {
      id: 'mar-1',
      name: 'Zulia Biker Point • Distribuidor Autorizado',
      city: 'Maracaibo',
      address: 'Av. Bella Vista con Calle 72, CC Costa Verde',
      phone: '+58 424 555 1234',
      hours: 'Lun a Sáb: 9:00 AM - 6:00 PM',
      lat: 10.666,
      lng: -71.612,
    },
    {
      id: 'bar-1',
      name: 'Lara Motos Pro • Distribuidor Autorizado',
      city: 'Barquisimeto',
      address: 'Carrera 19 entre Calles 24 y 25, Zona Centro',
      phone: '+58 416 333 7890',
      hours: 'Lun a Vie: 8:30 AM - 5:00 PM',
      lat: 10.067,
      lng: -69.347,
    },
    {
      id: 'san-1',
      name: 'Andes Biker Hub • Distribuidor Autorizado',
      city: 'San Cristóbal',
      address: 'Av. 19 de Abril, Sector Pirineos, CC Los Andes',
      phone: '+58 424 777 8899',
      hours: 'Lun a Sáb: 8:30 AM - 5:30 PM',
      lat: 7.766,
      lng: -72.225,
    },
    {
      id: 'mcy-1',
      name: 'Centro Biker Aragua • Distribuidor Autorizado',
      city: 'Maracay',
      address: 'Av. Las Delicias, Centro Empresarial Europa',
      phone: '+58 412 444 5566',
      hours: 'Lun a Sáb: 9:00 AM - 5:30 PM',
      lat: 10.246,
      lng: -67.595,
    },
    {
      id: 'lec-1',
      name: 'Oriente Motos Sport • Distribuidor Autorizado',
      city: 'Lechería / Puerto La Cruz',
      address: 'Av. Principal de Lechería, CC Plaza Mayor',
      phone: '+58 414 888 2211',
      hours: 'Lun a Sáb: 10:00 AM - 7:00 PM',
      lat: 10.199,
      lng: -64.693,
    },
  ];

  const filteredStores = stores.filter((store) => {
    const matchesCity = selectedCity === 'todos' || store.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSearch =
      store.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
      store.city.toLowerCase().includes(searchLocation.toLowerCase()) ||
      store.address.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section
      id="distribuidores"
      className="block_5 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 relative z-20"
      style={{
        background: 'linear-gradient(180deg, #ffffff 70%, #000000 70%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Title matching reference: Distribuidores autorizados en: */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6bb8be] tracking-wide">
            Distribuidores autorizados en:
          </h3>
        </div>

        {/* Reference Container: #wpsl-wrap */}
        <div className="bg-[#f1f1f1] rounded-[20px] p-5 sm:p-8 shadow-xl border border-gray-200">
          
          {/* Reference Search Bar */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-300">
            {/* Input Tu ubicación */}
            <div className="flex-1 min-w-[220px]">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Tu ubicación:
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Caracas, Valencia, Maracaibo..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#6bb8be]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Dropdown Radio de búsqueda */}
            <div className="w-40">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Radio:
              </label>
              <select
                value={selectedRadius}
                onChange={(e) => setSelectedRadius(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#6bb8be]"
              >
                <option value="10">10 km</option>
                <option value="25">25 km</option>
                <option value="50">50 km</option>
                <option value="100">100 km</option>
                <option value="500">Todo el país</option>
              </select>
            </div>

            {/* Filter by Venezuelan City */}
            <div className="w-44">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Ciudad:
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#6bb8be]"
              >
                <option value="todos">Todas las ciudades</option>
                <option value="Caracas">Caracas</option>
                <option value="Valencia">Valencia</option>
                <option value="Maracaibo">Maracaibo</option>
                <option value="Barquisimeto">Barquisimeto</option>
                <option value="San Cristóbal">San Cristóbal</option>
                <option value="Maracay">Maracay</option>
                <option value="Lechería / Puerto La Cruz">Lechería / Pto La Cruz</option>
              </select>
            </div>

            {/* Buscar Button */}
            <div className="self-end pt-1">
              <button
                type="button"
                className="fc-btn-teal text-xs sm:text-sm font-bold uppercase tracking-wider py-2.5 px-6 rounded cursor-pointer"
              >
                Buscar
              </button>
            </div>
          </div>

          {/* Map Preview & Store Directory */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            {/* Store Listing (Left / Column) */}
            <div className="lg:col-span-5 max-h-[380px] overflow-y-auto pr-2 space-y-3">
              {filteredStores.length === 0 ? (
                <div className="p-6 text-center text-gray-500 bg-white rounded-lg">
                  No se encontraron puntos en este radio. Mostrando envíos directos por ZOOM/MRW/Tealca a toda Venezuela.
                </div>
              ) : (
                filteredStores.map((store) => (
                  <div
                    key={store.id}
                    className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#6bb8be] transition-all shadow-sm hover:shadow"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-extrabold text-sm text-gray-900">
                        {store.name}
                      </h4>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#6bb8be]/20 text-[#53b8bd] shrink-0">
                        {store.city}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6bb8be] shrink-0" />
                      <span>{store.address}</span>
                    </p>

                    <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between border-t border-gray-100 pt-2">
                      <span>{store.hours}</span>
                      <a
                        href={`https://wa.me/584121234567?text=Hola!%20Deseo%20información%20sobre%20el%20punto%20de%20venta%20de%20${store.city}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#6bb8be] hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Contactar</span>
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Interactive Vector Map Canvas (Right / Column) */}
            <div className="lg:col-span-7 h-[380px] rounded-xl overflow-hidden bg-slate-900 relative shadow-inner border border-gray-300 flex flex-col justify-between p-6">
              {/* Map Graphic overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#6bb8be_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                  Mapa de Cobertura Nacional FreedConn Venezuela
                </span>
                <span className="text-xs text-[#7abbc0] font-bold">
                  {filteredStores.length} Puntos Activos
                </span>
              </div>

              {/* Graphic Map Visualization with Pins */}
              <div className="relative z-10 w-full flex-1 flex items-center justify-center my-4">
                <div className="relative w-full max-w-md h-44 bg-zinc-800/80 rounded-2xl border border-zinc-700/80 p-4 flex flex-wrap items-center justify-around gap-2 text-center">
                  <div className="group cursor-pointer">
                    <span className="w-3 h-3 rounded-full bg-[#6bb8be] inline-block animate-ping" />
                    <span className="block text-[11px] font-bold text-white mt-1">Caracas</span>
                    <span className="text-[9px] text-[#7abbc0]">Sede Central</span>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" />
                    <span className="block text-[11px] font-bold text-white mt-1">Valencia</span>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" />
                    <span className="block text-[11px] font-bold text-white mt-1">Maracaibo</span>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" />
                    <span className="block text-[11px] font-bold text-white mt-1">Barquisimeto</span>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" />
                    <span className="block text-[11px] font-bold text-white mt-1">San Cristóbal</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs text-zinc-300 bg-black/70 p-3 rounded-lg border border-zinc-800">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#6bb8be]" />
                  Despachos diarios a cualquier estado vía ZOOM, MRW y Tealca
                </span>
                <a
                  href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Quiero%20saber%20dónde%20comprar%20en%20mi%20ciudad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#6bb8be] hover:underline flex items-center gap-1"
                >
                  <span>Consultar Envío</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
