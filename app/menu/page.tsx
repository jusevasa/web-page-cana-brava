import Link from 'next/link';

import AguardienteSection from '@/components/AguardienteSection';
import BeerSection from '@/components/BeerSection';
import MobileMenu from '@/components/MobileMenu';
import OtherLiquorSection from '@/components/OtherLiquorSection';
import RumSection from '@/components/RumSection';
import TequilaSection from '@/components/TequilaSection';
import VodkaSection from '@/components/VodkaSection';
import WhiskySection from '@/components/WhiskySection';
import WineSection from '@/components/WineSection';

import { CATEGORIES } from '@/constants/categories';
import { CanaBravaWhiteLogo } from '@/components/logos';
import CocktailSection from '@/components/CocktailSection';
import { ScrollToTopBtn } from '@/components/ScrollToTopBtn';
import PaymentMethodsSection from '@/components/PaymentMethodsSection';
import OtherSection from '@/components/OtherSection';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Caña Brava Sala Bar | Menu',
  description: 'Menu de todos nuestros licores y cervezas',
};

export default async function Page() {
  return (
    <>
      <NavBar />
      <MobileMenu categories={CATEGORIES} />
      <main className='flex flex-col items-center relative overflow-hidden '>
        <WhiskySection />
        <RumSection />
        <TequilaSection />
        <AguardienteSection />
        <VodkaSection />
        <WineSection />
        <OtherLiquorSection />
        <BeerSection />
        <OtherSection />
        <CocktailSection />
        <PaymentMethodsSection />
      </main>
      <ScrollToTopBtn />
    </>
  );
}
