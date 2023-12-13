import { Metadata } from 'next';
import * as React from 'react';

import { outfit } from '@/components/FontFamily';

import ErrorLogo from '~/svg/errorLogo.svg';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div
          className={`layout flex min-h-screen flex-col items-center justify-center text-center ${outfit.className}`}
        >
          <ErrorLogo className='w-[300px]' />

          <p className='mb-6 text-[20px] font-medium'>Something went wrong!</p>
          <p className='mb-8 text-center text-[#5C5C5C]'>
            We encountered an error while trying to connect with our server.
            Please try after sometime.
          </p>
          <a
            href='/'
            className='rounded-sm bg-[#EEF5FF] px-4 py-[15px] text-base text-[#385B8B]'
          >
            Back to home
          </a>
        </div>
      </section>
    </main>
  );
}
