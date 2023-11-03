import React from 'react';

import InputTag from '@/components/inputtag/InputTag';
import Label from '@/components/Label';

import { BankDetailsType } from '@/app/signup/page';

type KeyType = {
  [key: string]: string;
};

type PropType = {
  onChange: (arg1: string, arg2: string) => void;
  error: KeyType;
  data: BankDetailsType;
};

const BankDetails = ({ data, onChange, error }: PropType) => {
  return (
    <>
      <div>
        <Label text='Bank Name' />
        <InputTag
          value={data?.bankName}
          placeholder='Enter Bank Name'
          onChange={(value) => onChange('bankName', value)}
          errorMessage={error?.bankName}
        />
      </div>
      <div>
        <Label text='Branch' />
        <InputTag
          value={data?.branch}
          placeholder='Enter Branch Name'
          onChange={(value) => onChange('branch', value)}
          errorMessage={error?.branch}
        />
      </div>
      <div>
        <Label text='Account Number' />
        <InputTag
          value={data?.accountNumber}
          type='number'
          placeholder='Enter Account Number '
          onChange={(value) => onChange('accountNumber', value)}
          errorMessage={error?.accountNumber}
        />
      </div>
      <div>
        <Label text='IFSC Code' />
        <InputTag
          value={data?.IFSCCode}
          placeholder='Enter IFSC Name'
          onChange={(value) => onChange('IFSCCode', value)}
          errorMessage={error?.IFSCCode}
        />
      </div>
    </>
  );
};

export default BankDetails;
