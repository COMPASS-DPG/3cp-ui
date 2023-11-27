'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { validateEmail, validatePassword } from '@/lib/helper';

import ButtonFill from '@/components/button/ButtonFill';
import { outfit, oxanium } from '@/components/FontFamily';
import InputTag from '@/components/inputtag/InputTag';
import PasswordInput from '@/components/inputtag/PasswordInput';
import Label from '@/components/Label';

import { useAuthContext } from '@/context/AuthContext';
import { emailRegisterCheck, userLogin } from '@/services/authServices';

const Login = () => {
  const { handleSetProviderId } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const router = useRouter();

  // for login
  const handleLogin = async () => {
    try {
      const data = await userLogin({ email, password });
      localStorage.setItem('3cpToken', data?.data?.providerId);
      handleSetProviderId(data?.data?.providerId);
      router.push('my-courses');
      toast.success(data.message);
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.error('API call error:', error);
      toast.error('please enter valid password');
    }
  };

  // will check is email registered or not
  const handleEmailRegisterCheck = async () => {
    try {
      const data = await emailRegisterCheck({ email: email });
      if (data?.found) {
        setIsPasswordShow(true);
      } else {
        toast.warn('user is not registered');
        localStorage.setItem('userEmailId', email);
        router.push(`/sign-up`);
      }
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.error('API call error:', error);
      toast.error('something went wrong');
    }
  };

  const handleEmailRegistered = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isPasswordShow) {
      if (validateEmail(email, setEmailError)) {
        handleEmailRegisterCheck();
      }
    } else {
      if (validatePassword(password, setPasswordError)) {
        handleLogin();
      }
    }
  };

  //will set email and will set email error to empty string
  const handleEmailChange = (value: string) => {
    if (emailError) setEmailError('');
    setEmail(value);
  };

  // will set password and will set password error to empty string
  const handlePasswordChange = (value: string) => {
    if (passwordError) setPasswordError('');
    setPassword(value);
  };

  return (
    <div className={`flex ${outfit.className}`}>
      <form onSubmit={handleEmailRegistered}>
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
          {isPasswordShow ? (
            <div className='mb-[30px] w-[450px]'>
              <Label text='Password' />
              <PasswordInput
                value={password}
                placeholder='Enter Password'
                onChange={handlePasswordChange}
                width='450px'
                errorMessage={passwordError}
              />
              <div className='pt-2 text-right text-base text-[#385B8B]'>
                <a href=''>Forget password?</a>
              </div>
            </div>
          ) : (
            <div className='mb-[30px] w-[450px]'>
              <Label text='Email' />
              <InputTag
                placeholder='Enter Email ID'
                value={email}
                onChange={handleEmailChange}
                errorMessage={emailError}
              />
            </div>
          )}

          <ButtonFill type='submit' classes='bg-[#385B8B] w-[450px]'>
            {isPasswordShow ? 'Login' : 'Continue'}
          </ButtonFill>
        </div>
      </form>
      <div className='hidden h-screen w-[50vw] bg-[#385B8B] lg:block'></div>
    </div>
  );
};

export default Login;
