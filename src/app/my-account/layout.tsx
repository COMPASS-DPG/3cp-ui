'use client';
import * as React from 'react';

import { outfit } from '@/components/FontFamily';
import TopNavbar from '@/components/navbar/TopNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`w-screen bg-[#F7F9FC] ${outfit.className}`}>
      <TopNavbar heading='My Account' />
      {children}
    </div>
  );
}
