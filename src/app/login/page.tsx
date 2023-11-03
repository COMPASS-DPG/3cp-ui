'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import ButtonFill from '@/components/button/ButtonFill';
import { outfit, oxanium } from '@/components/FontFamily';
import InputTag from '@/components/inputtag/InputTag';
import Label from '@/components/Label';

const Login = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  // will check for valid email
  function validateEmail(email: string) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  }

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      localStorage.setItem('userEmailId', email);
      router.push(`/signup`);
    } else {
      toast.error('email is not valid');
    }
  };

  return (
    <div className={`flex ${outfit.className}`}>
      <form onSubmit={handleLogin}>
        <div className=' h-screen w-full px-[155px] pt-[110px] lg:w-[50vw]'>
          <div
            className={`${oxanium.className} mb-[64px] text-[50px]
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
            <Label text='Email' />
            <InputTag
              placeholder='Enter Email ID'
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </div>
          <ButtonFill type='submit' classes='bg-[#385B8B] w-[450px]'>
            Continue
          </ButtonFill>
        </div>
      </form>
      <div className='hidden h-screen w-[50vw] bg-[#385B8B] lg:block'></div>
    </div>
  );
};

export default Login;
