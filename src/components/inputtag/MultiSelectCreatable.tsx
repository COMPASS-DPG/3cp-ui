'use client';
import React from 'react';
import { ActionMeta, MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';

export type OptionType = {
  label: string;
  value: string;
};

export type PropsType = {
  onChange: (value: string[]) => void;
  value: string[];
  options: OptionType[];
  placeholder: string;
  errorMessage?: string;
  paddingY?: string;
  isDisabled?: boolean;
};

const MultiSelectCreatable = ({
  options,
  onChange,
  value,
  placeholder,
  errorMessage = '',
  paddingY = '',
  isDisabled = false,
}: PropsType) => {
  const handleOption = (
    evt: MultiValue<OptionType>,
    action: ActionMeta<OptionType>
  ) => {
    if (
      action.action === 'select-option' ||
      action.action === 'create-option'
    ) {
      onChange(evt?.map((item: OptionType) => item?.value));
    } else if (action.action === 'remove-value') {
      if (Array.isArray(value)) {
        onChange(
          value?.filter((option) => option !== action?.removedValue?.value)
        );
      }
    }
  };

  return (
    <div>
      <CreatableSelect
        menuPlacement='top'
        isMulti
        isDisabled={isDisabled}
        options={options}
        value={value?.map((item) => ({
          label: item,
          value: item,
        }))}
        className='basic-multi-select'
        classNamePrefix='select'
        placeholder={placeholder}
        onChange={(evt, action) => {
          if (Array.isArray(evt)) {
            handleOption(evt, action);
          }
        }}
        styles={{
          input: (base) => ({
            ...base,
            'input:focus': {
              boxShadow: 'none',
            },
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

export default MultiSelectCreatable;
