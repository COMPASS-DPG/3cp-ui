'use client';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import ArrowNavbar from '@/components/navbar/ArrowNavbar';
import SideNavbar from '@/components/navbar/SideNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEdit = pathname.includes('edit-course');
  return (
    <>
      <SideNavbar />
      <div className='w-screen bg-[#F7F9FC]  p-[30px]'>
        <ArrowNavbar menu={isEdit ? 'Edit Course' : 'Add New Course'} />
        {children}
      </div>
    </>
  );
}
