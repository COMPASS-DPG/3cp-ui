'use client';

import React from 'react';

import ConnectionCheckWrapper from '@/components/NoInternetConnection/ConnectionCheckWrapper';

import AuthContext from '@/context/AuthContext';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConnectionCheckWrapper>
      <div className='bg-[#F7F9FC]'>
        <AuthContext>
          <div className='flex'>{children}</div>
        </AuthContext>
      </div>
    </ConnectionCheckWrapper>
  );
};

export default LayoutWrapper;
