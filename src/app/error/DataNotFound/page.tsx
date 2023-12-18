'use client';

import React from 'react';

import { outfit } from '@/components/FontFamily';

import NotFoundIcon from '~/svg/NotFoundIcon.svg';

// pass this component in ErrorModal as children
const Page = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center text-center'>
      <p className={`text-3xl font-semibold ${outfit.className} `}>Oops!</p>
      <div className='my-5 flex items-center justify-center '>
        <NotFoundIcon className='w-[180px]' />
      </div>
      <p
        className={`text-base font-normal text-[#65758C] ${outfit.className} `}
      >
        Not able to fetch data
        <br />
        Some connection Error Happened!
      </p>
      <a href='/' className='mt-4'>
        Try again
      </a>
      <></>
    </div>
  );
};

export default Page;
