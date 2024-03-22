'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { COCKTAILS } from '@/constants';

const CocktailSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className='bg-orange-600 p-8 relative w-full' id='9'>
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
          Cocktails
        </h2>
        <div className='grid grid-cols-1 gap-y-8 justify-center items-center'>
          {COCKTAILS.sort((a, b) => a.name.localeCompare(b.name)).map(
            (drink, index) => {
              const { name, description, value } = drink;
              return (
                <div
                  className='row text-white justify-center items-center'
                  key={index}
                >
                  <div className='flex justify-between items-center font-bold'>
                    <h3>{name}</h3>
                    <span className='text-2xl'>{value}</span>
                  </div>
                  <div className='flex'>
                    <p className='font-light'>{description}</p>
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
