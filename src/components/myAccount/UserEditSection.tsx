import { useState } from 'react';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
import InputSection from '@/components/myAccount/InputSection';

import { userType } from '@/app/my-account/page';

const UserEditSection = ({
  user,
  setShowEditSection,
}: {
  user: userType;
  setShowEditSection: (val: boolean) => void;
}) => {
  const [userDetail, setUserDetail] = useState(user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className='p-5 text-[#272728]'>
      {/* general details */}
      <div>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          General Details
        </p>

        <div className='mt-5 flex w-full gap-12'>
          <InputSection
            labelName='Name'
            type='text'
            name='name'
            value={userDetail.name}
            handleInputChange={handleInputChange}
          />
          <InputSection
            labelName='Organisation'
            type='text'
            name='organisation'
            value={userDetail.organization}
            handleInputChange={handleInputChange}
            isDisable={true}
          />
          <InputSection
            labelName='Email'
            type='text'
            name='email'
            value={userDetail.email}
            handleInputChange={handleInputChange}
            isDisable={true}
          />
        </div>
      </div>
      {/* Banking Details */}
      <div className='mt-10'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          Banking Details
        </p>
        {/* first row */}
        <div className='mt-5 flex w-full gap-12'>
          <InputSection
            labelName='Bank'
            type='text'
            name='bank'
            value={userDetail.bank}
            handleInputChange={handleInputChange}
          />
          <InputSection
            labelName='Branch'
            type='text'
            name='branch'
            value={userDetail.branch}
            handleInputChange={handleInputChange}
          />
          <InputSection
            labelName='Account Number'
            type='text'
            name='accountnumber'
            value={userDetail.accountNumber}
            handleInputChange={handleInputChange}
          />
        </div>
        {/* second row */}
        <div className='mt-5 flex w-full gap-12'>
          <InputSection
            labelName='IFSC Code'
            type='text'
            name='ifsc'
            value={userDetail.ifscCode}
            handleInputChange={handleInputChange}
          />
          <InputSection
            labelName='PAN Number'
            type='text'
            name='pan'
            value={userDetail.panNumber}
            handleInputChange={handleInputChange}
          />
          <InputSection
            labelName='GST Number'
            type='text'
            name='gstNumber'
            value={userDetail.gstNumber}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      {/* button section */}
      <div className='mt-20 flex justify-end gap-10'>
        <ButtonOutline
          onClick={() => setShowEditSection(false)}
          classes='w-[180px] border border-[#385B8B]'
        >
          Cancel
        </ButtonOutline>
        <ButtonFill onClick={() => null} classes='w-[180px] bg-[#385B8B]'>
          Update
        </ButtonFill>
      </div>
    </div>
  );
};
export default UserEditSection;
