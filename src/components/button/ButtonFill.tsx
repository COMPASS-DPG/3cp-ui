'use client';
import React from 'react';

export type ButtonType = {
  onClick?: () => void;
  children: React.ReactNode;
  classes: string;
  type?: 'submit' | undefined;
  disabled?: boolean;
};

const ButtonFill = ({
  onClick,
  children,
  classes,
  type = undefined,
  disabled = false,
}: ButtonType) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-md border ${classes} box-border block px-4 py-2 text-base font-semibold text-white hover:opacity-80`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
