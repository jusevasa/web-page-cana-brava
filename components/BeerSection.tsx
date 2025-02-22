'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { BEERS, CANECAS, JARRAS } from '@/constants';

const BeerSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className='bg-white p-8 relative w-full max-w-2xl' id='8'>
      <div
        className={`${
          inView
            ? 'animate-fade-left animate-ease-in-out opacity-100'
            : 'opacity-0'
        }`}
        ref={ref}
        style={{
          transition: 'opacity 0.1s ease',
        }}
      >
        <h2 className='text-orange-600 text-6xl font-bold mb-8 text-end'>
          Cervezas
        </h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-4 justify-center items-center'>
          <div className='font-semibold'></div>
          <div className='font-semibold text-end'></div>
          {BEERS.sort((a, b) => a.name.localeCompare(b.name)).map(
            (drink, index) => {
              const { name, value } = drink;
              return (
                <React.Fragment key={index}>
                  <div className='text-sm'>{name}</div>
                  <div className='text-end text-sm'>{value}</div>
                </React.Fragment>
              );
            }
          )}
        </div>
      </div>

      <div
        className={`mt-10 ${
          inView
            ? 'animate-fade-left animate-ease-in-out opacity-100'
            : 'opacity-0'
        }`}
      >
        <h2 className='text-orange-600 text-6xl font-bold mb-8 text-left'>
          Canecas
        </h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-4 justify-center items-center'>
          {CANECAS.sort((a, b) => a.name.localeCompare(b.name)).map(
            (drink, index) => {
              const { name, value } = drink;
              return (
                <React.Fragment key={index}>
                  <div className='text-sm'>{name}</div>
                  <div className='text-end text-sm'>{value}</div>
                </React.Fragment>
              );
            }
          )}
        </div>
      </div>
      <div
        className={`mt-10 ${
          inView
            ? 'animate-fade-left animate-ease-in-out opacity-100'
            : 'opacity-0'
        }`}
      >
        <h2 className='text-orange-600 text-6xl font-bold mb-8 text-end'>
          Jarras
        </h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-4 justify-center items-center'>
          {JARRAS.sort((a, b) => a.name.localeCompare(b.name)).map(
            (drink, index) => {
              const { name, value } = drink;
              return (
                <React.Fragment key={index}>
                  <div className='text-sm'>{name}</div>
                  <div className='text-end text-sm'>{value}</div>
                </React.Fragment>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default BeerSection;
