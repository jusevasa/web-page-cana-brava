import React from 'react';

import { RUMS } from '@/constants';

const RumSection = () => {
  return (
    <section className='bg-transparent rounded-lg p-4 mb-8 mx-5' id='2'>
      <h2 className='text-orange-600 text-5xl font-extrabold mb-8 text-center'>
        Ron
      </h2>
      <div className='grid grid-cols-3 gap-x-2 gap-y-4 justify-center items-center'>
        <div className='text-white font-semibold'></div>
        <div className='text-white font-semibold text-end'>Botella</div>
        <div className='text-white font-semibold text-end'>Media</div>
        {RUMS.map((drink, index) => {
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

export default RumSection;
