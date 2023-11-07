'use client';
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

const SelectTag = ({
  options,
  onChange,
  width = '100%',
  value,
  placeholder,
  errorMessage = '',
  paddingY = '',
  isDisabled = false,
}: PropsType) => {
  return (
    <div>
      <Select
        isDisabled={isDisabled}
        options={options}
        value={options.find((item) => item.value === value)}
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
            width,
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: errorMessage ? 'red' : '#E3E7EF',
            paddingTop: paddingY,
            paddingBottom: paddingY,
            borderRadius: '8px',
          }),
        }}
      />
      {errorMessage && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SelectTag;
