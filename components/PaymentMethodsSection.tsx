import Image from 'next/image';

const PaymentMethodsSection = () => {
  return (
    <section className='bg-white w-full p-8 flex flex-col justify-between items-center gap-4'>
      <p className='font-extrabold'>Recibimos todas las tarjetas</p>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <Image
          alt='metodo de pago mastercard'
          src='/Mastercard-logo.webp'
          width={90}
          height={90}
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
        <Image
          alt='metodo de pago visa'
          src='/ic-visa.webp'
          width={100}
          height={100}
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
        <Image
          alt='metodo de pago nequi'
          src='/ic-nequi-new.webp'
          width={100}
          height={100}
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
        <Image
          alt='metodo de pago davidplata'
          src='/ic-daviplata.webp'
          width={100}
          height={100}
          style={{ objectFit: 'cover' }}
          loading='lazy'
        />
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
