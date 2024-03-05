import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export const SectionMenu = () => {
  return (
    <section className='flex justify-between items-center flex-col gap-3 md:gap-4 w-full my-4 md:mt-10 '>
      <div className='w-full hidden md:block min-h-[120px]'>
        <Marquee className='text-5xl font-semibold overflow-hidden'>
          <p className='text-transparent text-outline mx-4'>Menú</p>
          <p className='text-transparent text-outline mx-4'>Menú</p>
          <p className='text-transparent text-outline mx-4'>Menú</p>
          <p className='text-white mx-4'>Menú</p>
          <p className='text-transparent text-outline mx-4'>Menú</p>
          <p className='text-transparent text-outline mx-4'>Menú</p>
          <p className='text-transparent text-outline mx-4'>Menú</p>
        </Marquee>
        <Marquee
          className='text-5xl font-semibold overflow-hidden'
          autoFill
          direction='right'
        >
          <p className='text-transparent text-outline mx-4'>Menú</p>
        </Marquee>
      </div>
      <p className='text-white text-center'>
        Visita nuestro menú desde donde quieras y disfruta del mejor
        <br /> ambiente salsero junto a tus acompañantes.
      </p>
      <Link href='/menu'>
        <button className='bg-[var(--color-orange)] py-3 px-8 relative cursor-pointer hover:bg-orange-700 ease-in duration-300 hover:text-orange-300 rounded-2xl md:w-80 text-white font-bold'>
          Ver menú
        </button>
      </Link>
    </section>
  );
};
