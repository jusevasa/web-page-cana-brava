import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='border min-h-[300px] h-[300px] md:h-[400px] bg-white w-full mt-20'>
      <div className='flex justify-center max-w-7xl mx-auto md:pt-15 md:px-10 h-full'>
        <div
          className='flex justify-center items-center w-full h-full relative
        flex-col gap-4'
        >
          <div className='w-2/3 h-28 relative'>
            <Image alt='canabrava-icon' src='/logo_color.webp' fill />
          </div>
          <p>Copyright &copy;Caña Brava Salsa Bar {new Date().getFullYear()}</p>
        </div>
        <div className='w-full h-2/3 relative self-end hidden md:block'>
          <Image alt='whatsapp-canabrava' src='/characters.webp' fill />
        </div>
      </div>
    </footer>
  );
};
