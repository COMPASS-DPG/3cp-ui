'use client';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import SideNavbar from '@/components/navbar/SideNavbar';
import TopNavbar from '@/components/navbar/TopNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname?.includes('/my-courses/') ? (
        <>{children}</>
      ) : (
        <>
          <SideNavbar />
          <div className='h-full w-screen bg-[#F7F9FC]'>
            <TopNavbar heading='My Courses' />
            {children}
          </div>
        </>
      )}
    </>
  );
}
