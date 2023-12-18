import { useRouter } from 'next/navigation';
import React from 'react';

import ButtonFill from '@/components/button/ButtonFill';
import { outfit } from '@/components/FontFamily';

import CheckedLogo from '~/svg/checkedLogo.svg';

type PropType = {
  onClose: () => void;
};

const CourseAddSuccessPopup = ({ onClose }: PropType) => {
  const router = useRouter();
  const handleClose = () => {
    onClose();
    router.push('/my-courses');
  };
  return (
    <div className={`${outfit.className} p-[50px]`}>
      <div className='flex justify-center'>
        <CheckedLogo className='w-[30px]' />
      </div>
      <div className='my-5 text-center text-[24px] font-semibold text-black'>
        Congratulations!
      </div>
      <div className='text-center text-[16px] text-[#272728] '>
        Your course has been sent for Admin Approval
      </div>
      <div className='mt-[50px] flex justify-center'>
        <ButtonFill onClick={handleClose} classes='bg-[#26292D] w-[150px]'>
          ok
        </ButtonFill>
      </div>
    </div>
  );
};

export default CourseAddSuccessPopup;
