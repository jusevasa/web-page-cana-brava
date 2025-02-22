'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { COCKTAILS, COCKTAILS_PREMIUM } from '@/constants';

const CocktailSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className='bg-orange-600 p-8 relative w-full max-w-2xl' id='10'>
      <div
        className={` ${
          inView
            ? 'animate-fade-right animate-ease-in-out opacity-100'
            : 'opacity-0'
        }`}
        ref={ref}
        style={{
          transition: 'opacity 0.1s ease',
        }}
      >
        <h2 className='text-white text-6xl font-bold mb-8 text-center drop-shadow-xl'>
          Cócteles
        </h2>
        <div className='grid grid-cols-1 gap-y-8 justify-center items-center'>
          {COCKTAILS.sort((a, b) => a.name.localeCompare(b.name)).map(
            (drink, index) => {
              const { name, description, value } = drink;
              return (
                <div
                  className='grid grid-cols-4 text-white justify-start items-start'
                  key={index}
                >
                  <div className='flex flex-col col-span-3 w-full'>
                    <h3 className='font-semibold'>{name}</h3>
                    <p className='font-light'>{description}</p>
                  </div>
                  <div className='flex justify-end'>
                    <span className='text-2xl'>{value}</span>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="my-4">
          <h3 className="text-white text-4xl font-bold text-center drop-shadow-xl">
            Premiums
          </h3> 
        </div>
        <div className='grid grid-cols-1 gap-y-8 justify-center items-center mt-4'>
          {COCKTAILS_PREMIUM.sort((a, b) => a.name.localeCompare(b.name)).map(
            (drink, index) => {
              const { name, description, value } = drink;
              return (
                <div
                  className='grid grid-cols-4 text-white justify-start items-start'
                  key={index}
                >
                  <div className='flex flex-col col-span-3 w-full'>
                    <h3 className='font-semibold'>{name}</h3>
                    <p className='font-light'>{description}</p>
                  </div>
                  <div className='flex justify-end'>
                    <span className='text-2xl'>{value}</span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default CocktailSection;
