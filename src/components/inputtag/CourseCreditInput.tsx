import React from 'react';

type PropType = {
  errorMessage: string;
  value: string | number;
  onChange: (arg: string) => void;
};

const CourseCreditInput = ({ errorMessage, value, onChange }: PropType) => {
  return (
    <div>
      <div
        className={`border border-solid ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } flex
         cursor-pointer items-center justify-between rounded-md`}
      >
        <input
          type='number'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onWheel={(e) => e.currentTarget.blur()}
          className=' w-full border-0  outline-none focus-within:outline-none focus-within:ring-0 
          focus:border-0 focus:outline-none focus:ring-0'
        />
        <span
          className={`text-left ${errorMessage && 'text-red-500'} 
         cursor-pointer rounded-r-md bg-[#C3D0E3] px-4 py-2`}
        >
          Cr.
        </span>
      </div>
      {errorMessage && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default CourseCreditInput;
