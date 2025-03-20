'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Category } from '@/types';

interface MobileMenuProps {
  categories: Category[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories }) => {
  const [currentSection, setCurrentSection] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement | null>(null);

  const isDarkSection = currentSection === 8 || currentSection === 9;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sectionPositions: Record<string, number> = {};
      categories.forEach((category) => {
        const section = document.getElementById(`${category.id}`);
        if (section) {
          sectionPositions[category.id] = section.offsetTop;
        }
      });

      let activeSection: number | null = null;
      for (const [id, position] of Object.entries(sectionPositions)) {
        if (scrollPosition >= position) {
          activeSection = parseInt(id);
        } else {
          break;
        }
      }

      setCurrentSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);

  useEffect(() => {
    if (currentSection !== null && navRef.current) {
      const activeItem = navRef.current.querySelector(`[data-id="${currentSection}"]`);
      if (activeItem) {
        activeItemRef.current = activeItem as HTMLDivElement;

        const containerWidth = navRef.current.offsetWidth;
        const itemLeft = activeItem.getBoundingClientRect().left;
        const itemWidth = activeItem.getBoundingClientRect().width;
        const containerLeft = navRef.current.getBoundingClientRect().left;
        const scrollLeft = itemLeft - containerLeft - containerWidth / 2 + itemWidth / 2;

        navRef.current.scrollTo({
          left: navRef.current.scrollLeft + scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentSection]);

  return (
    <div className='sticky top-0 z-10' ref={containerRef}>
      <div
        className={`w-full overflow-hidden shadow-md ${
          isDarkSection ? 'bg-black' : 'bg-white'
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-8 bg-gradient-to-r z-10 pointer-events-none
          ${isDarkSection ? 'from-black' : 'from-white'} to-transparent`}
        ></div>
        <div
          className={`absolute right-0 top-0 h-full w-8 bg-gradient-to-l z-10 pointer-events-none
          ${isDarkSection ? 'from-black' : 'from-white'} to-transparent`}
        ></div>

        <div
          ref={navRef}
          className={`py-3 overflow-x-auto flex items-center transition-colors px-4
          [&::-webkit-scrollbar]:hidden scroll-smooth
          ${isDarkSection ? 'bg-black' : 'bg-white'}`}
          style={{ paddingLeft: '8px', paddingRight: '8px' }}
        >
          <div className='w-4 shrink-0'></div>
          {categories.map((category, index) => (
            <div
              key={index}
              data-id={category.id}
              className={`px-4 py-2 mx-2 text-md font-semibold cursor-pointer text-center capitalize 
              whitespace-nowrap transition-all rounded-lg flex-shrink-0 relative
              ${
                isDarkSection
                  ? 'text-white hover:bg-gray-800'
                  : 'text-black hover:bg-gray-100'
              }
              ${currentSection === category.id ? 'opacity-100' : 'opacity-70'}`}
              onClick={() => scrollToSection(`${category.id}`, index)}
            >
              {category.name}
              {currentSection === category.id && (
                <div 
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                    isDarkSection ? 'bg-white' : 'bg-black'
                  }`}
                ></div>
              )}
            </div>
          ))}
          <div className='w-4 shrink-0'></div>
        </div>
      </div>
    </div>
  );
};

const scrollToSection = (sectionId: string, index: number) => {
  const section = document.getElementById(sectionId);
  if (section) {
    if (index === 0) {
      section.style.scrollMarginTop = '160px';
    } else if (index === 1) {
      section.style.scrollMarginTop = '150px';
    } else if (index === 3) {
      section.style.scrollMarginTop = '260px';
    } else if (index === 4) {
      section.style.scrollMarginTop = '410px';
    } else {
      section.style.scrollMarginTop = '160px';
    }
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default MobileMenu;