'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { BackArrow } from '../../../public/svg';
const ArrowNavbar = ({ menu }: { menu: string }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <div className='flex items-center p-[30px]'>
        <button
          className='mr-[15px] flex h-11 w-11 cursor-pointer 
        items-center justify-center rounded-md border-2 
        border-solid border-[#D9D9D9] bg-[#FFFFFF] hover:bg-gray-100 '
          onClick={handleBack}
        >
          <BackArrow width='30px' />
        </button>

        <div className='text-[24px] text-xl font-semibold text-[#000]'>
          {menu}
        </div>
      </div>
    </div>
  );
};

export default ArrowNavbar;
