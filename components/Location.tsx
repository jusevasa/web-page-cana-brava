'use client';

import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 4.618756069289437,
  lng: -74.13800891943363,
};

export const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDGVKwYyakjeU8FQour1ZEwN8eEMWIj88k',
  });

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <section className='p-8 bg-white mt-20'>
      <h2 className='text-4xl font-bold text-orange-600 mb-8 text-center'>
        Ubicación
      </h2>
      <div className='rounded-lg overflow-hidden shadow-lg'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15} // Nivel de zoom del mapa
          center={center} // Centra el mapa en las coordenadas de tu local
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
};
