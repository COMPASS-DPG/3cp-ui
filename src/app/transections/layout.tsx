'use client';
import * as React from 'react';

import { outfit } from '@/components/FontFamily';
import SideNavbar from '@/components/navbar/SideNavbar';
import TopNavbar from '@/components/navbar/TopNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNavbar />
      <div className={`w-screen bg-[#F7F9FC] ${outfit.className}`}>
        <TopNavbar heading='Transections' />
        {children}
      </div>
    </>
  );
}
