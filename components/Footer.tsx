import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from './logos/Instagram';
import { Facebook } from './logos/Facebook';

export const Footer = () => {
  return (
    <footer className='border min-h-[300px] h-[300px] md:h-[400px] bg-white w-full mt-20 p-5'>
      <div className='grid md:grid-cols-3 justify-center max-w-7xl mx-auto md:pt-15 md:px-10 h-full items-center flex-col'>
        <div>
          <h4 className='font-bold text-center '>¡SIGUENOS!</h4>
          <div className='flex w-full justify-around items-center'>
            <Link
              href='https://www.instagram.com/canabravasalsa.bar?igsh=cmp3aXZ4OW1kYW44'
              target='_blank'
            >
              <Instagram width={50} height={50} />
            </Link>
            <Link
              href='https://www.facebook.com/canabrava.salsabar?mibextid=LQQJ4d'
              target='_blank'
            >
              <Facebook width={60} height={60} />
            </Link>
          </div>

          <div
            className='flex justify-center items-center w-full h-full relative 
        flex-col gap-4'
          >
            <div className='w-full h-28 flex justify-center items-center'>
              <Image
                alt='logo-canabrava'
                src='/logo_color.webp'
                width={300}
                height={150}
              />
            </div>
            <p>
              Copyright &copy;Caña Brava Salsa Bar {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <div className='w-full h-2/3 md:h-5/6 md:w-full relative self-end hidden md:block md:col-span-2'>
          <Image
            alt='whatsapp-canabrava'
            src='/characters.png'
            fill
            className='img-mask'
          />
        </div>
      </div>
    </footer>
  );
};
