import { Footer } from '@/components/Footer';
import HeroInital from '@/components/HeroInital';
import NavBar from '@/components/NavBar';
import { MenuSection } from '@/components/MenuSection';
import { Location } from '@/components/Location';
import GoogleReviews from '@/components/GoogleReviews';

export const metadata = {
  title: 'Caña Brava Sala Bar | Inicio',
  description: 'El mejor bar de salsa de bogota',
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='max-w-7xl px-4 pt-6 md:pt-15 md:px-10 mx-auto'>
        <HeroInital />
        <MenuSection />
        <Location />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
