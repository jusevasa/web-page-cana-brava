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
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '',
  });

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <section className='px-4 py-8 bg-white mt-20'>
      <h2 className='text-4xl font-bold text-orange-600 mb-8 text-center'>
        Ubicación
      </h2>
      <div className='rounded-lg overflow-hidden shadow-lg'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={17}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
};
