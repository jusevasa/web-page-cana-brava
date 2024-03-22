'use client';

import { useEffect } from 'react';

export const ScrollToTopBtn: React.FC = () => {
  useEffect(() => {
    let timeout: number = 0;
    const DISPLAY = { BLOCK: 'block', NONE: 'none' } as const;

    function toggleScrollToTop() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const display = scrollTop > 20 ? DISPLAY.BLOCK : DISPLAY.NONE;

      const button = document.getElementById(
        'scroll-to-top'
      ) as HTMLButtonElement;
      const parent = button?.closest('#button-up');

      if (parent) {
        parent.classList.toggle('opacity-0', display === DISPLAY.NONE);
        button.classList.toggle('cursor-default', display === DISPLAY.NONE);
      }
    }

    function throttledScrollHandler() {
      if (!timeout) {
        timeout = requestAnimationFrame(() => {
          toggleScrollToTop();
          timeout = 0;
        });
      }
    }

    window.addEventListener('scroll', throttledScrollHandler);

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id='button-up'
      className='fixed bottom-2 right-2 opacity-0 transition-opacity'
    >
      <button
        id='scroll-to-top'
        aria-label='Volver al inicio de la página'
        className='group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-primary backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition'
        onClick={handleButtonClick}
      >
        <svg
          aria-label='Subir al inicio de la página'
          strokeWidth='2'
          stroke='#F48604'
          viewBox='0 0 24 24'
          fill='none'
          className='h-6 w-6 -rotate-45 group-hover:-rotate-90 group-hover:text-accent motion-safe:transition'
          width='20px'
        >
          <path
            d='M14 5l7 7m0 0l-7 7m7-7H3'
            strokeLinejoin='round'
            strokeLinecap='round'
          ></path>
        </svg>
      </button>
    </div>
  );
};
