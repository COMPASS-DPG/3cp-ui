'use client';
import React, { useState } from 'react';

import ButtonFill from '@/components/button/ButtonFill';
import { outfit, oxanium } from '@/components/FontFamily';
import PasswordInput from '@/components/inputtag/PasswordInput';
import Label from '@/components/Label';
import ArrowNavbar from '@/components/navbar/ArrowNavbar';

const Password = () => {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    return password;
  };

  return (
    <div className={`flex ${outfit.className}`}>
      <div className='h-screen w-[50vw] px-[80px] pt-[40px]'>
        <ArrowNavbar />
        <div className='  pl-[75px]'>
          <div
            className={`${oxanium.className} mb-[64px] mt-[26px] text-[50px]
         font-bold text-[#385B8B]`}
          >
            COMPASS
          </div>
          <div className='mb-2 text-[34px] font-semibold text-[#272728]'>
            Welcome
          </div>
          <div className='mb-[50px] text-[24px] font-normal text-[#5C5C5C] '>
            Lorem Ipsum dolor kindapsium
          </div>
          <div className='mb-[30px] w-[450px]'>
            <Label text='Password' />
            <PasswordInput
              value={password}
              placeholder='Enter Password'
              onChange={(value) => setPassword(value)}
              width='450px'
              required={true}
            />
            <div className='pt-2 text-right text-base text-[#385B8B]'>
              <a href=''>Forget password?</a>
            </div>
          </div>
          <ButtonFill onClick={handleLogin} classes='bg-[#385B8B] w-[450px]'>
            Login
          </ButtonFill>
        </div>
      </div>
      <div className='h-screen w-[50vw] bg-[#385B8B]'></div>
    </div>
  );
};

export default Password;
