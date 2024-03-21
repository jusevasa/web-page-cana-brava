import React from 'react';

import { BEERS, OTHERS } from '@/constants';

const BeerSection = () => {
  return (
    <section className='bg-white p-8 relative' id='8'>
      <div>
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
      <div className='mt-10'>
        <h2 className='text-orange-600 text-6xl font-bold mb-8 text-center'>
          Otros
        </h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-4 justify-center items-center'>
          <div className='font-semibold'></div>
          <div className='font-semibold text-end'></div>
          {OTHERS.sort((a, b) => a.name.localeCompare(b.name)).map(
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
