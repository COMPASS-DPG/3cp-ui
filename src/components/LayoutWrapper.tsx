'use client';

import React from 'react';

import AuthContext from '@/context/AuthContext';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#F7F9FC]'>
      <AuthContext>
        <div className='flex'>{children}</div>
      </AuthContext>
    </div>
  );
};

export default LayoutWrapper;
