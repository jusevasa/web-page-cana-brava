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

      {/* Contenedor de imágenes */}
      <div className='absolute w-full h-auto flex justify-start items-end bottom-[-85px] left-0 px-4'>
        {/* Botella azul */}
        <div className='relative w-[100px] h-[180px] z-10'>
          <Image
            alt='botella media antioqueno azul'
            src='/antioqueno-azul.webp'
            fill
            style={{ objectFit: 'contain' }}
            loading='lazy'
          />
        </div>
        {/* Botella verde (superpuesta) */}
        <div className='relative w-[90px] h-[180px] -ml-12 z-0'>
          <Image
            alt='botella media antioqueno verde'
            src='/antioqueno-verde.webp'
            fill
            style={{ objectFit: 'contain' }}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default AguardienteSection;