import React from 'react';

import InputTag from '@/components/inputtag/InputTag';
import Label from '@/components/Label';

import { BankDetailsType } from '@/app/signup/page';

import { capitalizeName } from '../capitalizeName';

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
          onChange={(value) => onChange('bankName', capitalizeName(value))}
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
      <div>
        <Label text='PAN Number' />
        <InputTag
          value={data?.PANNumber}
          placeholder='Enter PAN Number'
          onChange={(value) => onChange('PANNumber', value)}
          errorMessage={error?.PANNumber}
        />
      </div>
      <div>
        <Label text='GST' />
        <InputTag
          value={data?.GSTNumber}
          placeholder='Enter GST Number'
          onChange={(value) => onChange('GSTNumber', value)}
          errorMessage={error?.GSTNumber}
        />
      </div>
    </>
  );
};

export default BankDetails;
