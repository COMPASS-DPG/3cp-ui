import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
import { outfit } from '@/components/FontFamily';
import Label from '@/components/Label';

// import { useAuthContext } from '@/context/AuthContext';
import { userSignup } from '@/services/authServices';

type DataType = {
  name: string;
  orgName: string;
  orgLogo: string | File;
  phone: string;
  password: string;
  confirmPassword: string;
  bankName: string;
  branchName: string;
  accNo: string;
  IFSC: string;
  email: string;
  GSTnumber: string;
  PANnumber: string;
  logoUrl: string;
};

type PropType = {
  data: DataType;
  onClose: () => void;
  handleStep: () => void;
};

export type SignupPropType = {
  name: string;
  email: string;
  orgLogo: string;
  orgName: string;
  password: string;
  phone: string;
  paymentInfo: {
    bankName: string;
    branchName: string;
    accNo: string;
    IFSC: string;
    PANnumber: string;
    GSTnumber: string;
  };
};

const UserDetailsModal = ({ data, handleStep, onClose }: PropType) => {
  const router = useRouter();
  // const { handleSetProviderId } = useAuthContext()

  const request: SignupPropType = {
    name: data?.name,
    email: data?.email,
    orgLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png',
    orgName: data.orgName,
    password: data.password,
    phone: `+91${data.phone}`,
    paymentInfo: {
      bankName: data.bankName,
      branchName: data.branchName,
      accNo: data.accNo,
      IFSC: data.IFSC,
      PANnumber: data.PANnumber,
      GSTnumber: data.GSTnumber,
    },
  };
  const handleContinue = () => {
    (async () => {
      try {
        const data = await userSignup(request);
        // handleSetProviderId(data.providerId)
        localStorage.setItem('3cpToken', data.providerId);
        router.push('/login');
        onClose();
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.error('API call error:', error);
        toast.error('something went wrong try after some time');
      }
    })();
  };

  const handleEdit = () => {
    handleStep();
    onClose();
  };

  return (
    <div className={`${outfit.className} p-5`}>
      <div className='flex items-center gap-5'>
        <div className='rounded-full border border-solid border-gray-300'>
          <Image
            src={`data:image/jpeg;base64,${data.logoUrl}`}
            width={80}
            height={80}
            alt='logo'
            className='rounded-full'
          />
        </div>
        <div className='text-[30px] font-semibold text-[#272728]'>
          {data?.orgName}
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
            <div className='text-base text-[#272728]'>{data?.phone}</div>
          </div>
        </div>
        <div>
          <div className='mb-[20px] text-base font-semibold text-[#272728] underline'>
            Bank Details
          </div>
          <div className='mb-[10px]'>
            <Label text='Bank' />
            <div className='text-base text-[#272728]'>{data.bankName}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='Branch' />
            <div className='text-base text-[#272728]'>{data?.branchName}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='Account Number' />
            <div className='text-base text-[#272728]'>{data?.accNo}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='IFSC Code' />
            <div className='text-base text-[#272728]'>{data?.IFSC}</div>
          </div>
        </div>
        <div>
          <div className='mb-[20px] text-base font-semibold text-[#272728] underline'>
            Others Details
          </div>
          <div className='mb-[10px]'>
            <Label text='PAN Number' />
            <div className='text-base text-[#272728]'>{data?.PANnumber}</div>
          </div>
          <div className='mb-[10px]'>
            <Label text='GST Number' />
            <div className='text-base text-[#272728]'>{data?.GSTnumber}</div>
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
