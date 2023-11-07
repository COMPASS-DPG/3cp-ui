'use client';
import React from 'react';

import { ButtonType } from '@/components/button/ButtonFill';

const ButtonOutline = ({ onClick, children, classes }: ButtonType) => {
  return (
    <button
      className={`box-border block rounded-md border border-solid ${classes} px-4 py-2 text-base font-semibold hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
