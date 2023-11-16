'use client';
import Image from 'next/image';
import React from 'react';
import Select, { SingleValue } from 'react-select';

export type OptionType = {
  label: string;
  value: string;
};

export type PropsType = {
  onChange: (value: string) => void;
  value: string;
  width?: string;
  options: OptionType[];
  placeholder: string;
  errorMessage?: string;
  paddingY?: string;
  isDisabled?: boolean;
};

import CourseProvider from '~/images/courseProvider.png';

const UserSelect = ({ options, onChange, placeholder, value }: PropsType) => {
  return (
    <div className='px-[1px] py-[6px] focus-within:border-blue-400 '>
      <div className='flex rounded-3xl border border-solid border-[#E3E7EF] p-1'>
        <div className='flex items-center justify-center overflow-hidden rounded-full border border-[#ccc]'>
          <Image src={CourseProvider} alt='profile' width={30} height={30} />
        </div>
        <Select
          options={options}
          value={options.find((item: OptionType) => item.value === value)}
          placeholder={placeholder}
          onChange={(e: SingleValue<OptionType>) => {
            if (e) {
              onChange(e?.value);
            }
          }}
          styles={{
            input: (base) => ({
              ...base,
              'input:focus': {
                boxShadow: 'none',
              },
              width: '150px',
            }),
            control: (baseStyles) => ({
              ...baseStyles,
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default UserSelect;
