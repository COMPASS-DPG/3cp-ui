'use client';

import React from 'react';

import AuthContext from '@/context/AuthContext';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthContext>
        <div className='flex'>{children}</div>
      </AuthContext>
    </div>
  );
};

export default LayoutWrapper;
