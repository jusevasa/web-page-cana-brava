'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { OTHERS_LIQUORS } from '@/constants';

const OtherLiquorSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      className={`bg-transparent rounded-lg p-8 pb-24 mb-8 mx-5 relative ${
        inView
          ? 'animate-fade-left animate-ease-in-out opacity-100'
          : 'opacity-0'
      }`}
      id='7'
      ref={ref}
      style={{
        transition: 'opacity 0.1s ease',
      }}
    >
      <h2 className='text-orange-600 text-5xl font-extrabold mb-8 text-center'>
        Otros Licores
      </h2>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 justify-center items-center'>
        <div className='text-white font-semibold'></div>
        <div className='text-white font-semibold text-end'>Botella</div>
        {OTHERS_LIQUORS.map((drink, index) => {
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

export default OtherLiquorSection;
