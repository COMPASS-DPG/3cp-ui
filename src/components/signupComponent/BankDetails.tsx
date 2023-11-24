import React from 'react';

import InputTag from '@/components/inputtag/InputTag';
import Label from '@/components/Label';

import { BankDetailsType } from '@/app/sign-up/page';

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
          value={data?.branchName}
          placeholder='Enter Branch Name'
          onChange={(value) => onChange('branchName', value)}
          errorMessage={error?.branchName}
        />
      </div>
      <div>
        <Label text='Account Number' />
        <InputTag
          value={data?.accNo}
          type='number'
          placeholder='Enter Account Number '
          onChange={(value) => onChange('accNo', value)}
          errorMessage={error?.accNo}
        />
      </div>
      <div>
        <Label text='IFSC Code' />
        <InputTag
          value={data?.IFSC}
          placeholder='Enter IFSC Name'
          onChange={(value) => onChange('IFSC', value)}
          errorMessage={error?.IFSC}
        />
      </div>
      <div>
        <Label text='PAN Number' />
        <InputTag
          value={data?.PANnumber}
          placeholder='Enter PAN Number'
          onChange={(value) => onChange('PANnumber', value)}
          errorMessage={error?.PANnumber}
        />
      </div>
      <div>
        <Label text='GST' />
        <InputTag
          value={data?.GSTnumber}
          placeholder='Enter GST Number'
          onChange={(value) => onChange('GSTnumber', value)}
          errorMessage={error?.GSTnumber}
        />
      </div>
    </>
  );
};

export default BankDetails;
