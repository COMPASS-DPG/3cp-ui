import Image from 'next/image';
import { GiSandsOfTime } from 'react-icons/gi';

import ButtonFill from '@/components/button/ButtonFill';
import RejectSummary from '@/components/Course/RejectSummary';
import ResetPassword from '@/components/popUps/ResetPassword';

import { userType } from '../../../src/app/my-account/page';

import CourseProvider from '~/images/courseProvider.png';
import { EditIcon, VerifiedTick } from '~/svg';
const MyAccountTopbar = ({
  user,
  setShowEditSection,
}: {
  user: userType;
  setShowEditSection: (val: boolean) => void;
}) => {
  return (
    <div>
      <div className='absolute top-5 mx-5 flex h-[160px] w-[160px] items-center justify-center rounded-full bg-[#fff]'>
        <Image src={CourseProvider} alt='CourseProvider' />
      </div>
      <div
        className={`flex h-[100px] items-center justify-between ${
          user.state === 'verified'
            ? 'bg-[#DDFFE2]'
            : user.state == 'pending'
            ? 'bg-[#FDFFE1]'
            : 'bg-[#FFE3E8]'
        } pl-[200px]`}
      >
        <p className='#272728 text-[30px] font-semibold leading-10'>
          {user.organization}
        </p>

        {user.state == 'verified' ? (
          <p className='flex items-center gap-1 pr-8 text-[18px] font-semibold leading-5 text-[#4ACB5F]'>
            <VerifiedTick width='20px' />
            Profile Verified
          </p>
        ) : user.state == 'pending' ? (
          <p className='flex items-center gap-1 pr-8 text-[18px] font-semibold leading-5 text-[#FF5824]'>
            <GiSandsOfTime width='20px' />
            Awaiting Admin Approval
          </p>
        ) : (
          <p className='flex items-center gap-1 pr-8 text-[18px] font-semibold leading-5 text-[#FF5674]'>
            <GiSandsOfTime width='20px' />
            Rejected
          </p>
        )}
      </div>
      <div className='flex h-[100px] items-center justify-between bg-[#385B8B] pl-[200px]'>
        <div className='gap-2 text-[#fff]'>
          <p className='text-[20px] font-medium'>{user.name}</p>
          <p className='font-[Inter] text-[14px]'>{user.email}</p>
        </div>
        {user.state !== 'verified' ? (
          <div className='mr-8 flex gap-2 rounded-lg bg-[#fff] px-5 py-2.5 font-[#272728] text-[16px] font-semibold leading-5 opacity-40'>
            <EditIcon width='24px' /> Edit Profile
          </div>
        ) : (
          <ButtonFill
            classes='bg-[#fff] px-5 py-2.5 mr-8  hover:opacity-40 text-[16px] leading-5  font-semibold'
            onClick={() => setShowEditSection(true)}
          >
            <div className=' flex gap-2 text-[#272728]'>
              <EditIcon width='24px' /> Edit Profile
            </div>
          </ButtonFill>
        )}
      </div>
      {user.state == 'rejected' && (
        <div className='p-4'>
          <RejectSummary />
        </div>
      )}
      <ResetPassword />
    </div>
  );
};
export default MyAccountTopbar;
