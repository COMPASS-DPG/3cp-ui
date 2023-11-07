'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { outfit, oxanium } from '../../components/FontFamily';
import { MyAccount, MyCourses, Transections } from '../../../public/svg';
// import NavLink from './NavLink'

const SideNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 flex h-screen w-[200px] flex-shrink-0 flex-col  items-start gap-[15px]  bg-[#2D496F]'>
      <div className='inline-flex  h-[100px] w-[200px] items-center justify-end pb-4 pt-[30px]'>
        <div className='inline-flex items-center justify-start gap-3 self-stretch px-[22px]'>
          <div className='flex items-center justify-start pb-6 pr-3 pt-1.5'>
            <p
              className={`text-3xl font-semibold text-white ${oxanium.className} leading-normal`}
            >
              COMPASS
            </p>
          </div>
        </div>
      </div>

      <div
        className={`inline-flex h-10 w-[200px] items-center justify-end py-2.5 pl-4 ${
          pathname === '/my-courses' ? 'bg-white bg-opacity-30' : ''
        }`}
      >
        <Link href='/my-courses'>
          <div className='inline-flex items-center justify-start gap-2 self-stretch'>
            <MyCourses width='20px' />
            <p
              className={`w-[154px] text-base font-medium text-white ${outfit.className} tracking-[0.2px]`}
            >
              My Courses
            </p>
          </div>
        </Link>
      </div>

      <div
        className={`inline-flex h-10 w-[200px] items-center justify-end py-2.5 pl-4 ${
          pathname === '/transections' ? 'bg-white bg-opacity-30' : ''
        }`}
      >
        <Link href='/transections'>
          <div className='inline-flex items-center justify-start gap-2 self-stretch'>
            <Transections width='20px' />
            <p
              className={`w-[154px] text-base font-medium text-white ${outfit.className} tracking-[0.2px]`}
            >
              Transactions
            </p>
          </div>
        </Link>
      </div>
      <div
        className={`inline-flex h-10 w-[200px] items-center justify-end py-2.5  pl-4 ${
          pathname === '/my-account' ? 'bg-white bg-opacity-30' : ''
        }`}
      >
        <Link href='/my-account'>
          <div className='inline-flex items-center justify-start gap-2 self-stretch'>
            <MyAccount width='20px' />
            <p
              className={`w-[154px] text-base font-medium text-white ${outfit.className} tracking-[0.2px]`}
            >
              My Account
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default SideNavbar;
