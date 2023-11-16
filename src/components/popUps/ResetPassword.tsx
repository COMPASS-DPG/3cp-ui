import { AiFillLock, AiOutlineEye } from 'react-icons/ai';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
const ResetPassword = () => {
  return (
    <div className='w-[500px] border bg-[#fff] px-12  text-[16px] font-medium  leading-6 text-[#000]'>
      <div className='py-5 text-center text-[24px] font-semibold'>
        Reset Password
      </div>
      <form className='flex flex-col'>
        <label htmlFor='' className='my-2 text-[#6F747E]'>
          Current Password
        </label>

        <div className='relative flex items-center justify-between text-[16px] leading-6'>
          <input
            className='flex-1 rounded-lg border border-[#E3E7EF] text-[#272728] placeholder:text-[#aaa]'
            type='password'
            placeholder='Enter Current Password'
            required={true}
          />
          <AiOutlineEye size='24' className='absolute end-2' />
        </div>
        <label htmlFor='' className='mb-2 mt-4 text-[#6F747E]'>
          New Password
        </label>

        <div className='relative flex items-center justify-between text-[16px] leading-6'>
          <input
            className='flex-1 rounded-lg border border-[#E3E7EF] text-[#272728] placeholder:text-[#aaa]'
            type='password'
            placeholder='Enter New Password'
            required={true}
          />
          <AiFillLock size='24' className='absolute end-2' />
        </div>
        <label htmlFor='' className='mb-2 mt-4 text-[#6F747E]'>
          Confirm Password
        </label>

        <div className='relative flex items-center justify-between text-[16px] leading-6'>
          <input
            className='flex-1 rounded-lg border border-[#E3E7EF] text-[#272728] placeholder:text-[#aaa]'
            type='password'
            placeholder='Confirm Password'
            required={true}
          />
          <AiFillLock size='24' className='absolute end-2' />
        </div>
        <div className='my-8  flex gap-6'>
          <ButtonOutline classes='flex-1 border-[#26292D]' onClick={() => null}>
            Cancel
          </ButtonOutline>
          <ButtonFill onClick={() => null} classes='flex-1 bg-[#26292D]'>
            Update
          </ButtonFill>
        </div>
      </form>
    </div>
  );
};
export default ResetPassword;
