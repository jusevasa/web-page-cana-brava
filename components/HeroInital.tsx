'use client';
import { URL_WHATSAPP_API_RESERVATION } from '@/constants/general';
import Image from 'next/image';
import Typed from 'react-typed';

const HeroInital = () => {
  return (
    <>
      <div className='fixed right-0 md:top-[-200px] -z-30'>
        <Image
          alt='background-bottles'
          src='/bg-hero-home.webp'
          width={1000}
          height={700}
        />
      </div>
      <section className='md:mt-20 container mx-auto md:grid md:grid-cols-3 md:gap-2 md:min-h-[490px]'>
        <div className='text-white flex flex-col items-center md:items-start md:col-span-2 animate-fade-right animate-ease-in-out'>
          <h1 className='text-5xl text-center md:text-left md:text-7xl font-bold md:w-[90%] min-h-[144px]'>
            Bienvenido al <br className='hidden md:block' />
            <span className='text-[var(--color-orange)]' aria-hidden>
              mejor bar <br className='hidden md:block' />
              <Typed
                strings={['salsero', 'rumbero', 'familiar']}
                typeSpeed={80}
                loop
              />
            </span>{' '}
          </h1>
          <h2 className='text-5xl text-center md:text-left md:text-7xl font-bold md:mb-10 md:mt-2'>
            de Bogotá
          </h2>
          <p className='mt-4 mb-8 text-justify md:w-3/5'>
            Reserva tu espacio para pasar una noche increible lleno de lo mejor
            de la salsa mundial.
          </p>
          <a
            href={URL_WHATSAPP_API_RESERVATION}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='bg-[var(--color-orange)] py-3 px-8 relative cursor-pointer hover:bg-orange-700 ease-in duration-300 hover:text-orange-300 rounded-2xl flex justify-center items-center gap-2 animate-bounce animate-infinite animate-duration-1000 animate-ease-in-out'>
              <span className='w-5 h-5 relative hover:text-orange-300'>
                <Image alt='whatsapp-canabrava' src='/icon-ws.webp' fill />
              </span>
              Reservar lugar
            </button>
          </a>
        </div>
        <div className='hidden md:block relative animate-fade-left animate-ease-in-out'>
          <div className='md:w-full md:h-full absolute -left-28 -top-16 -z-10'>
            <Image
              alt='botella oldparr'
              src='/bottle-oldpardd.webp'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='md:w-full md:h-full absolute -right-4 -top-16 -z-20'>
            <Image
              alt='botella buchanans'
              src='/bottle-buchanans.webp'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroInital;
