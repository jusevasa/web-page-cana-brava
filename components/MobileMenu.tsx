'use client';

import { Categorie } from '@/types';
import React from 'react';

interface MobileMenuProps {
  categories: Categorie[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories }) => {
  return (
    <nav className='fixed top-0 w-full bg-white z-20 overflow-x-scroll flex items-center py-4 border-b border-gray-200 shadow-sm [&::-webkit-scrollbar]:hidden scroll-smooth'>
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <div
            className='px-4 text-md text-gray-800 font-semibold cursor-pointer text-center capitalize'
            onClick={() => scrollToSection(`${category.id}`)}
          >
            {category.name}
          </div>
          {index !== categories.length - 1 && (
            <div className='mx-2 border-r border-gray-300 h-4' />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default MobileMenu;
