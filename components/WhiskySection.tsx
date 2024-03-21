import React from 'react';

import { WHISKYS } from '@/constants';

const WhiskySection = () => {
  return (
    <section className='bg-orange-600 rounded-lg p-8 mb-8 mx-5 relative' id='1'>
      <div className='absolute -top-10 left-10 h-[1000px] -z-10 gradient-radial-1 w-[200%]'></div>
      <h2 className='text-white text-5xl font-extrabold mb-8'>Whisky</h2>
      <div className='grid grid-cols-3 gap-x-2 gap-y-4 justify-center items-center'>
        <div className='text-white font-semibold'></div>
        <div className='text-white font-semibold text-end'>Botella</div>
        <div className='text-white font-semibold text-end'>Media</div>
        {WHISKYS.map((drink, index) => {
          const { name, bottle, halfBottle } = drink;
          return (
            <React.Fragment key={index}>
              <div className='text-white text-sm'>{name}</div>
              <div className='text-white text-end text-sm'>{bottle}</div>
              <div
                className={`${
                  halfBottle ? 'text-end' : 'pl-8 text-center'
                } text-white text-sm`}
              >
                {halfBottle ? halfBottle : '-'}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default WhiskySection;
