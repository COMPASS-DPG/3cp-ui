'use client';
import * as React from 'react';

import TopNavbar from '@/components/navbar/TopNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();

  return (
    <div className='h-full w-screen bg-[#F7F9FC]'>
      {/* <TopNavbar menu={'Create Question Bank'} /> */}
      <TopNavbar />
      {children}
    </div>
  );
}
