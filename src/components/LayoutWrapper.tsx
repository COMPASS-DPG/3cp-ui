'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import SideNavbar from '@/components/navbar/SideNavbar';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      <div className='flex'>
        {pathname.includes('/login') || pathname.includes('/signup') ? (
          <>{children}</>
        ) : (
          <>
            <SideNavbar />
            {children}
          </>
        )}
      </div>
    </div>
  );
};

export default LayoutWrapper;
