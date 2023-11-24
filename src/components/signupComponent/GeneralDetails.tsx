import React from 'react';

import FileInput from '@/components/inputtag/FileInput';
import InputTag from '@/components/inputtag/InputTag';
import PasswordInput from '@/components/inputtag/PasswordInput';
import Label from '@/components/Label';

import {
  GeneralDetailsErrorType,
  GeneralDetailsType,
} from '@/app/sign-up/page';

import { capitalizeName } from '../capitalizeName';

type PropType = {
  onChange: (arg: string, arg2: string | File) => void;
  error: GeneralDetailsErrorType;
  data: GeneralDetailsType;
};

const GeneralDetails = ({ data, onChange, error }: PropType) => {
  return (
    <>
      <div>
        <Label text='Name' />
        <InputTag
          value={data?.name}
          onChange={(value) => onChange('name', capitalizeName(value))}
          placeholder='Enter Name (of the account moderator)'
          errorMessage={error?.name}
        />
      </div>
      <div>
        <Label text='Organization' />
        <InputTag
          value={data.orgName}
          onChange={(value) => onChange('orgName', value)}
          placeholder='Enter Name (of the account moderator)'
          errorMessage={error?.orgName}
        />
      </div>
      <div>
        <Label text='Upload Logo of Organization' />
        <FileInput
          value={data?.orgLogo}
          accept='image/*'
          onChange={(value) => onChange('orgLogo', value)}
          errorMessage={error?.orgLogo}
        />
      </div>
      <div>
        <Label text='Phone' />
        <InputTag
          value={data?.phone}
          type='number'
          onChange={(value) => onChange('phone', value)}
          placeholder='Enter Phone Number (of the account moderator)'
          errorMessage={error?.phone}
        />
      </div>
      <div>
        <Label text='Set Password' />
        <PasswordInput
          value={data?.password}
          width='450px'
          onChange={(value) => onChange('password', value)}
          placeholder='Set Password'
          errorMessage={error?.password}
        />
      </div>
      <div>
        <Label text='Confirm Password' />
        <PasswordInput
          value={data?.confirmPassword}
          width='450px'
          onChange={(value) => onChange('confirmPassword', value)}
          placeholder='Confirm Password'
          isConfirmPassword={true}
          errorMessage={error?.confirmPassword}
        />
      </div>
    </>
  );
};

export default GeneralDetails;
