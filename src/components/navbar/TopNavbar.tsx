'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import UserSelect from '@/components/navbar/UserSelect';
import { USER_OPTIONS } from '@/components/SelectOptions';

import { VerifiedUser } from '~/svg';
import BellLogo from '~/svg/bellLogo.svg';

const TopNavbar = ({ heading }: { heading: string }) => {
  const [accountStatus, setAccountStatus] = useState('reject');

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/user1').then((response) => {
      const userData = response.data;
      const status = userData[0].state;
      setAccountStatus(status);
    });
  }, []);
  return (
    <nav className='flex items-center justify-between bg-white px-[30px] pb-[20px] '>
      <div className={`text-2xl font-semibold ${outfit.className}`}>
        {heading}
      </div>
      <div className='flex gap-x-11'>
        <BellLogo className='w-[24px]' />
        <UserSelect
          options={USER_OPTIONS}
          onChange={() => null}
          placeholder='user name'
          value=''
        />
        {accountStatus === 'verified' && (
          <div className='flex items-center'>
            <VerifiedUser width='28px' />
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
