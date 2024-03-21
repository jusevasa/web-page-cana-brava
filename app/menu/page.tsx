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

export const metadata = {
  title: 'Caña Brava Sala Bar | Menu',
  description: 'Menu de todos nuestros licores y cervezas',
};

export default async function Page() {
  return (
    <>
      <MobileMenu categories={CATEGORIES} />
      <main className='flex flex-col items-center mt-24 relative overflow-x-hidden'>
        <WhiskySection />
        <RumSection />
        <TequilaSection />
        <AguardienteSection />
        <VodkaSection />
        <WineSection />
        <OtherLiquorSection />
        <BeerSection />
      </main>
    </>
  );
}
