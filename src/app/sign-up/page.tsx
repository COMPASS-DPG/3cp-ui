'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  fileToBase64Image,
  isValidBankDetails,
  isValidGeneralDetails,
} from '@/lib/helper';

import ButtonFill from '@/components/button/ButtonFill';
import CommonModal from '@/components/CommonModal';
import { outfit, oxanium } from '@/components/FontFamily';
import ArrowNavbar from '@/components/navbar/ArrowNavbar';
import BankDetails from '@/components/signupComponent/BankDetails';
import GeneralDetails from '@/components/signupComponent/GeneralDetails';
import UserDetailsModal from '@/components/signupComponent/UserDetailsModal';

export type GeneralDetailsType = {
  name: string;
  orgName: string;
  orgLogo: string | File;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type GeneralDetailsErrorType = {
  [key: string]: string;
  name: string;
  orgName: string;
  orgLogo: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type BankDetailsType = {
  [key: string]: string;
  bankName: string;
  branchName: string;
  accNo: string;
  IFSC: string;
  PANnumber: string;
  GSTnumber: string;
};

const initialGeneralDetailsData = () => {
  return {
    name: '',
    orgName: '',
    orgLogo: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
};

const initialBankDetailsData = (): BankDetailsType => {
  return {
    bankName: '',
    branchName: '',
    accNo: '',
    IFSC: '',
    PANnumber: '',
    GSTnumber: '',
  };
};

const Signup = () => {
  const [logoUrl, setLogoUrl] = useState('');
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [generalDetailsError, setGeneralDetailsError] =
    useState<GeneralDetailsErrorType>(initialGeneralDetailsData());
  const [generalDetailsData, setGeneralDetailsData] =
    useState<GeneralDetailsType>(initialGeneralDetailsData());

  const [bankDetailsError, setBankDetailsError] = useState<BankDetailsType>(
    initialBankDetailsData()
  );
  const [bankDetailsData, setBankDetailsData] = useState<BankDetailsType>(
    initialBankDetailsData()
  );

  // will set error for bank details
  const handleBankDetailsError = (key: string, value: string) => {
    setBankDetailsError((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  // will set error for general details
  const handleGeneralDetailsError = (key: string, value: string) => {
    setGeneralDetailsError((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  // will set bank details and set error
  const handleBankDetailsData = (key: string, value: string) => {
    if (bankDetailsError?.[key]) {
      setBankDetailsError((pre) => {
        return {
          ...pre,
          [key]: '',
        };
      });
    }
    setBankDetailsData((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  // will set general details and set error
  const handleGeneralDetailsData = (key: string, value: string | File) => {
    if (key === 'orgLogo' && typeof value !== 'string') {
      fileToBase64Image(value, (value) => setLogoUrl(value));
    }
    if (generalDetailsError?.[key]) {
      setGeneralDetailsError((pre) => {
        return {
          ...pre,
          [key]: '',
        };
      });
    }
    setGeneralDetailsData((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  // will handle general and bank details form
  const handleStep = () => {
    if (step === 1) {
      setGeneralDetailsError(initialGeneralDetailsData());
      if (
        isValidGeneralDetails(generalDetailsData, handleGeneralDetailsError)
      ) {
        setStep(2);
      }
    }
    if (step === 2) {
      setBankDetailsError(initialBankDetailsData());
      if (isValidBankDetails(bankDetailsData, handleBankDetailsError)) {
        setIsOpen(true);
      }
    }
  };

  return (
    <div className={`flex ${outfit.className}`}>
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UserDetailsModal
          userData={{
            ...generalDetailsData,
            ...bankDetailsData,
            logoUrl,
          }}
          onClose={() => setIsOpen(false)}
          handleStep={() => setStep(1)}
        />
      </CommonModal>
      <div className='h-screen w-full px-[80px] pt-[40px] lg:w-[80vw]'>
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
          <div className='text-lg font-normal text-[#5C5C5C] '>
            Hi, looks like you are new here! Let's Sign-Up to Compass.{' '}
            <Link href='/login' className='text-[#385B8B]'>
              Already have an account
            </Link>
          </div>
          <div className='my-5 text-base text-[#65758C]'>Step {step}/2</div>
          <div className='mb-2 text-lg font-semibold text-[#272728]'>
            {step === 1 ? 'General Details' : 'Bank Details'}
          </div>
          <div className='mb-5 max-w-[912px] border border-b border-[#B3B3B3]'></div>
          <div className='grid w-[912px] grid-cols-1 gap-4 lg:grid-cols-2'>
            {step === 1 ? (
              <GeneralDetails
                data={generalDetailsData}
                onChange={handleGeneralDetailsData}
                error={generalDetailsError}
              />
            ) : (
              <BankDetails
                data={bankDetailsData}
                onChange={handleBankDetailsData}
                error={bankDetailsError}
              />
            )}
            <div>
              <ButtonFill
                onClick={handleStep}
                classes='bg-[#385B8B] w-[450px] mt-2'
              >
                Continue
              </ButtonFill>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden h-screen w-[20vw]  bg-[#385B8B] lg:block'></div>
    </div>
  );
};

export default Signup;
