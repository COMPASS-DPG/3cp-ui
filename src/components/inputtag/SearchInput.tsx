'use client';
import React from 'react';

type PropsType = {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  required?: boolean;
  width?: string;
};

const SearchInput = ({
  value,
  placeholder,
  required = false,
  onChange,
  width = '100%',
}: PropsType) => {
  return (
    <div className='relative '>
      <div className='pointer-events-none absolute inset-y-0 left-0 top-0 flex items-center pl-3'>
        <svg
          className='h-4 w-4 text-gray-500 dark:text-gray-400'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
          />
        </svg>
      </div>
      <input
        style={{ width: width }}
        type='text'
        className={`block  rounded-lg 
        border border-[#E3E7EF] bg-white py-2.5 pl-10 pr-[70px] text-sm  text-gray-900 placeholder:font-medium placeholder:text-[#909090]
         focus:ring-blue-400 `}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e?.target?.value)}
      />
    </div>
  );
};

export default SearchInput;
