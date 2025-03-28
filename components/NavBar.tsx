'use client';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CanaBravaWhiteLogo } from './logos';
import { URL_WHATSAPP_API_RESERVATION } from '@/constants/general';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className='max-w-7xl mx-auto px-9 pt-2 md:pt-15 md:px-10'>
      <nav className='w-full text-white'>
        <div className='container mx-auto flex items-center justify-between py-5'>
          <div className='w-full h-auto'>
            <CanaBravaWhiteLogo width={180} height={50} />
          </div>
          <div className='flex items-center justify-end'>
            <div className='md:hidden z-30'>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div
              className={`bg-black/30 backdrop-blur-md fixed inset-0 w-full -translate-x-full bg-red transition duration-300 md:w-auto md:static md:translate-x-0 md:bg-transparent z-20 ${
                isOpen ? 'translate-x-0' : ''
              }`}
            >
              <div className='flex flex-col h-full md:flex-row'>
                <ul
                  className="h-full gap-16 flex flex-col md:flex-row justify-center items-center [&>li:not(:last-child)]:cursor-pointer [&>li:not(:last-child)]:relative 
        [&>li:not(:last-child)]:after:content-[''] [&>li:not(:last-child)]:after:block 
        [&>li:not(:last-child)]:after:absolute [&>li:not(:last-child)]:after:bg-[var(--color-orange)] 
        [&>li:not(:last-child)]:after:left-0 [&>li:not(:last-child)]:after:right-0 [&>li:not(:last-child)]:after:w-0 
        [&>li:not(:last-child)]:after:h-[2px] [&>li:not(:last-child):hover]:after:w-full 
        [&>li:not(:last-child):hover]:after:ease-out [&>li:not(:last-child):hover]:after:duration-500"
                >
                  {!isHomePage && (
                    <li>
                      <Link href='/'>Inicio</Link>
                    </li>
                  )}
                  <li>
                    <Link href='/menu'>Menu</Link>
                  </li>

                  <a
                    href={URL_WHATSAPP_API_RESERVATION}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <li className='bg-[var(--color-orange)] rounded-2xl py-5 px-9 cursor-pointer hover:bg-orange-700 ease-in duration-300 w-auto hover:text-orange-300'>
                      Reservar
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
