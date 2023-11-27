'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { outfit } from '@/components/FontFamily';
import UserSelect from '@/components/navbar/UserSelect';
import { USER_OPTIONS } from '@/components/SelectOptions';

import { useAuthContext } from '@/context/AuthContext';

import { VerifiedUser } from '~/svg';
import BellLogo from '~/svg/bellLogo.svg';

const TopNavbar = ({ heading }: { heading: string }) => {
  const { userProfileData } = useAuthContext();
  const router = useRouter();

  const handleLogout = (value: string) => {
    if (value == 'logout') {
      localStorage.removeItem('3cpToken');
      router.push('/login');
    }
  };

  return (
    <nav className='flex items-center justify-between bg-white px-[30px] py-[14px] '>
      <div className={`text-2xl font-semibold ${outfit.className}`}>
        {heading}
      </div>
      <div className='flex gap-x-11'>
        <BellLogo className='w-[24px]' />
        <UserSelect
          options={USER_OPTIONS}
          onChange={handleLogout}
          placeholder={userProfileData.orgName}
          logo={userProfileData.orgLogo}
          value=''
        />
        {userProfileData.status === 'VERIFIED' && (
          <div className='flex items-center'>
            <VerifiedUser width='28px' />
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
