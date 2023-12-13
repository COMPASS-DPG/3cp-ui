import React from 'react';

import { outfit } from '@/components/FontFamily';

import NoInternetErrorIcon from '~/svg/NoInternetConnectionIcon.svg';

const NoInternetConnectionError = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <main>
      <section className='bg-white'>
        <div
          className={`layout flex min-h-screen flex-col
         items-center justify-center text-center ${outfit.className}`}
        >
          <NoInternetErrorIcon className='w-[300px]' />
          <p className='mb-6 text-[20px] font-medium'>Oops! no connection</p>
          <p className='mb-8 text-center text-[#5C5C5C]'>
            There seems to be a problem with your network connection. Please
            check your internet connection.
          </p>
          <button
            className='rounded-sm bg-[#EEF5FF] px-4 
          py-[15px] text-base text-[#385B8B]'
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      </section>
    </main>
  );
};

export default NoInternetConnectionError;
