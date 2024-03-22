'use client';

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { AGUARDIENTES } from '@/constants';

const AguardienteSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      className={`bg-orange-600 rounded-lg p-8 pb-20 mb-8 mx-5 relative ${
        inView
          ? 'animate-fade-right animate-ease-in-out opacity-100'
          : 'opacity-0'
      }`}
      id='4'
      ref={ref}
      style={{
        transition: 'opacity 0.1s ease',
      }}
    >
      <h2 className='text-white text-4xl mb-5 font-extrabold text-center'>
        Aguardiente
      </h2>
      <div className='grid grid-cols-3 gap-x-2 gap-y-4 justify-center items-center'>
        <div className='text-white font-semibold'></div>
        <div className='text-white font-semibold text-end'>Botella</div>
        <div className='text-white font-semibold text-end'>Media</div>
        {AGUARDIENTES.map((drink, index) => {
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
      <div className='absolute w-auto h-auto z-10 bottom-[-85px] left-16'>
        <Image
          alt='botella media antioqueno azul'
          src='/antioqueno-azul.webp'
          width={100}
          height={100}
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
      </div>
      <div className='absolute w-auto h-auto z-[-0] left-24'>
        <Image
          alt='botella media antioqueno verde'
          src='/antioqueno-verde.webp'
          width={90}
          height={90}
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
      </div>
    </section>
  );
};

export default AguardienteSection;
