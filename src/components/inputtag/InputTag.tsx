import React from 'react';

type PropType = {
  placeholder: string;
  value: string;
  type?: string;
  onChange: (arg: string) => void;
  required?: boolean;
  errorMessage?: string;
};

const InputTag = ({
  placeholder,
  onChange,
  value,
  required = false,
  errorMessage = '',
  type = 'text',
}: PropType) => {
  return (
    <div>
      <input
        type={type}
        className={`border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } 
             block w-full rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        onWheel={(e) => e.currentTarget.blur()}
      />
      {errorMessage && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputTag;
