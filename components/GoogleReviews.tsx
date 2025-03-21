'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { Review } from '@/app/types/review';

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/google-reviews');

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();

        const filteredReviews = data.reviews
          .filter((review: Review) => review.rating >= 3)
          .sort(
            (a: Review, b: Review) =>
              new Date(b.publishTime).getTime() -
              new Date(a.publishTime).getTime()
          );

        setReviews(filteredReviews);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(
          'No se pudieron cargar las reseñas. Por favor, inténtalo de nuevo más tarde.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className='text-yellow-400 fill-yellow-400'
          size={18}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key='half-star'
          className='text-yellow-400 fill-yellow-400'
          size={18}
        />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className='text-yellow-400' size={18} />
      );
    }

    return stars;
  };

  useEffect(() => {
    if (reviews.length > 0) {
      timerRef.current = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
          setIsAnimating(false);
        }, 500);
      }, 4000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [reviews.length]);

  const goToPrev = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsAnimating(false);
    }, 500);
  };

  const renderIndicators = (): JSX.Element[] => {
    return reviews.map((_, index) => (
      <button
        key={index}
        onClick={() => {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setActiveIndex(index);
        }}
        className={`h-2 mx-1 rounded-full transition-all duration-300 ${
          index === activeIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300'
        }`}
        aria-label={`Ver reseña ${index + 1}`}
      />
    ));
  };

  if (loading) {
    return (
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto text-center'>
          <div className='flex justify-center items-center h-40'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-600'></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              Lo que dicen nuestros clientes
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              {error ||
                'No hay reseñas disponibles en este momento. ¡Sé el primero en dejarnos tu opinión!'}
            </p>
          </div>
          <div className='text-center mt-10'>
            <a
              href={`https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-orange-600 text-white py-3 px-6 rounded-md font-medium hover:bg-orange-700 transition-colors duration-300'
            >
              Escribe una reseña en Google
            </a>
          </div>
        </div>
      </section>
    );
  }

  const currentReview = reviews[activeIndex];

  // Render reviews carousel
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto min-h-[600px]'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Lo que dicen nuestros clientes
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Descubre por qué Caña Brava es el mejor bar de salsa en Bogotá según
            las reseñas de nuestros clientes en Google.
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto px-4'>
          {reviews.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none'
                aria-label='Reseña anterior'
              >
                <ChevronLeft className='text-gray-700' size={24} />
              </button>

              <button
                onClick={goToNext}
                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none'
                aria-label='Reseña siguiente'
              >
                <ChevronRight className='text-gray-700' size={24} />
              </button>
            </>
          )}

          <div className='overflow-hidden'>
            <div
              className={`transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className='bg-white p-8 rounded-lg shadow-md'>
                <div className='flex items-center mb-4'>
                  <div className='relative w-16 h-16 mr-4 rounded-full overflow-hidden'>
                    <Image
                      src={
                        currentReview?.authorAttribution?.photoUri ||
                        '/images/avatars/default.jpg'
                      }
                      alt={`Foto de perfil de ${currentReview?.authorAttribution?.displayName}`}
                      className='object-cover'
                      fill
                      sizes='64px'
                      priority
                      unoptimized={currentReview?.authorAttribution?.photoUri?.startsWith(
                        'http'
                      )}
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-xl'>
                      {currentReview?.authorAttribution?.displayName}
                    </h3>
                    <p className='text-sm text-gray-500'>
                      {currentReview?.relativePublishTimeDescription}
                    </p>
                    <div className='flex mt-1'>
                      {renderStars(currentReview?.rating)}
                    </div>
                  </div>
                </div>

                <p className='text-gray-700 text-lg italic'>
                  &quot;{currentReview?.text?.text || ''}&quot;
                </p>
              </div>
            </div>
          </div>
          {reviews.length > 1 && (
            <div className='flex justify-center mt-6'>{renderIndicators()}</div>
          )}
        </div>

        <div className='text-center mt-10 sm:mx-4'>
          <a
            href={`https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-orange-600 text-white py-3 px-6 rounded-md font-medium hover:bg-orange-700 transition-colors duration-300'
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
