import { useRouter } from 'next/navigation';
import React from 'react';
import { SiUdemy } from 'react-icons/si';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
import { outfit } from '@/components/FontFamily';
import Label from '@/components/Label';

type DataType = {
  name: string;
  organization: string;
  organizationLogo: string | File;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  bankName: string;
  branch: string;
  accountNumber: string;
  IFSCCode: string;
  email: string | null;
};

type PropType = {
  data: DataType;
  onClose: () => void;
  handleStep: () => void;
};

const UserDetailsModal = ({ data, handleStep, onClose }: PropType) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/my-courses');
    onClose();
  };

  const handleEdit = () => {
    handleStep();
    onClose();
  };

  return (
    <div className={`${outfit.className} p-5`}>
      <div className='flex gap-5'>
        <SiUdemy size={50} />
        <div className='text-[30px] font-semibold text-[#272728]'>
          {data?.organization}
        </div>
      </div>
      <div className='my-[30px] flex justify-between'>
        <div>
          <div className='mb-[20px] text-base font-semibold text-[#272728] underline'>
            General Details
          </div>
          <div className='mb-[10px]'>
            <Label text='Name' />
            <div className='text-base text-[#272728]'>{data?.name}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='Email Id' />
            <div className='text-base text-[#272728]'>{data?.email}</div>
          </div>
          <div>
            <Label text='Phone' />
            <div className='text-base text-[#272728]'>{data?.phoneNumber}</div>
          </div>
        </div>
        <div className='pr-[120px]'>
          <div className='mb-[20px] text-base font-semibold text-[#272728] underline'>
            Bank Details
          </div>
          <div className='mb-[10px]'>
            <Label text='Bank' />
            <div className='text-base text-[#272728]'>{data.bankName}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='Branch' />
            <div className='text-base text-[#272728]'>{data?.branch}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='Account Number' />
            <div className='text-base text-[#272728]'>
              {data?.accountNumber}
            </div>
          </div>
          <div className='mb-[10px]'>
            <Label text='IFSC Code' />
            <div className='text-base text-[#272728]'>{data?.IFSCCode}</div>
          </div>
        </div>
      </div>
      <div className='mb-[20px] text-base text-[#385B8B]'>
        This a preview of your profile details, you can add course only after
        admin approval
      </div>
      <div className='flex gap-5'>
        <ButtonOutline
          classes='border-[#26292D] text-[#26292D] w-[120px]'
          onClick={handleEdit}
        >
          Edit
        </ButtonOutline>
        <ButtonFill onClick={handleContinue} classes='bg-[#26292D] w-[120px] '>
          Continue
        </ButtonFill>
      </div>
    </div>
  );
};

export default UserDetailsModal;
