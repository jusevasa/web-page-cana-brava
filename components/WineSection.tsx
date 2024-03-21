import React from 'react';

import { WINES } from '@/constants';

const WineSection = () => {
  return (
    <section
      className='bg-transparent rounded-lg p-8 pb-10 mx-5'
      id='6'
    >
      <div className='absolute top-1/2 left-10 h-[1000px] -z-10 gradient-radial-1 w-[200%]'></div>
      <h2 className='text-orange-600 text-5xl font-extrabold mb-8 text-start'>
        Vino
      </h2>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 justify-center items-center'>
        <div className='text-white font-semibold'></div>
        <div className='text-white font-semibold text-end'>Botella</div>
        {WINES.map((drink, index) => {
          const { name, bottle } = drink;
          return (
            <React.Fragment key={index}>
              <div className='text-white text-sm'>{name}</div>
              <div className='text-white text-end text-sm'>{bottle}</div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default WineSection;
