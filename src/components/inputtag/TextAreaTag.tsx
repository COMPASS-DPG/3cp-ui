import React from 'react';

type PropType = {
  value: string;
  onChange: (arg: string) => void;
  placeholder: string;
  errorMessage: string;
  rows?: number;
};

const TextAreaTag = ({
  value,
  onChange,
  errorMessage,
  placeholder,
  rows = 4,
}: PropType) => {
  return (
    <>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={rows} // You can adjust the number of rows here
        className={`w-full border p-2 ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        }  rounded-md focus:ring focus:ring-blue-300`}
      />
      {errorMessage && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default TextAreaTag;
