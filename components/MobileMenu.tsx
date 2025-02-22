'use client';

import React, { useState, useEffect } from 'react';

import { Category } from '@/types';

interface MobileMenuProps {
  categories: Category[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories }) => {
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);

  return (
    <nav
      className={`fixed top-0 py-3 w-full z-20 overflow-x-scroll flex items-center shadow-md [&::-webkit-scrollbar]:hidden scroll-smooth transition-colors ${
        currentSection === 8 || currentSection === 9 ? 'bg-black' : 'bg-white'
      }`}
    >
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <div
            className={`px-4 text-md font-semibold cursor-pointer text-center capitalize transition-colors ${
              currentSection === 8 || currentSection === 9 ? 'text-white' : 'text-black'
            }`}
            onClick={() => scrollToSection(`${category.id}`, index)}
          >
            {category.name}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};

const scrollToSection = (sectionId: string, index: number) => {
  const section = document.getElementById(sectionId);
  if (section) {
    if (index === 0) {
      section.style.scrollMarginTop = '200px';
    } else if (index === 3) {
      section.style.scrollMarginTop = '200px';
    } else if (index === 4) {
      section.style.scrollMarginTop = '350px';
    } else {
      section.style.scrollMarginTop = '100px';
    }
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default MobileMenu;
