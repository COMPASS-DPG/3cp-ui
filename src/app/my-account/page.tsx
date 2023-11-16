'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RiKey2Fill } from 'react-icons/ri';

import MyAccountTopbar from '@/components/myAccount/MyAccountTopbar';
import UserDetails from '@/components/myAccount/UserDetails';
import UserEditSection from '@/components/myAccount/UserEditSection';

export type userType = {
  userId: number;
  name: string;
  organization: string;
  Phone: string;
  email: string;
  bank: string;
  branch: string;
  accountNumber: string;
  ifscCode: string;
  state: string;
  logo?: string;
  panNumber: string;
  gstNumber: string;
};

const getinitialValue = () => {
  return {
    userId: 2,
    name: 'Lakshmi Narayana',
    organization: 'Unacademy',
    Phone: '9876543210',
    email: 'sampletest@gmail.com',
    bank: 'SBI',
    branch: 'Allahabad',
    accountNumber: '56156156456421562165',
    ifscCode: 'SBI0000456',
    state: 'rejected',
    logo: '../../../public/images/courseProvider.png',
    panNumber: 'SABCA456116P',
    gstNumber: '62651616262162',
  };
};
const MyAccount = () => {
  const [user, setUser] = useState<userType>(getinitialValue());
  const [showEditSection, setShowEditSection] = useState<boolean>(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/user1').then((response) => {
      const userData = response.data;
      const status = userData[0];
      setUser(status);
    });
  }, []);

  return (
    <div className='relative mb-10 px-[30px]'>
      <MyAccountTopbar user={user} setShowEditSection={setShowEditSection} />

      {showEditSection ? (
        <UserEditSection user={user} setShowEditSection={setShowEditSection} />
      ) : (
        <UserDetails user={user} />
      )}

      {user.state != 'rejected' && (
        <div className='flex items-center gap-1 text-[#385B8B]'>
          <RiKey2Fill width='18px ' />
          <p className='text-[16px] font-semibold leading-5 underline'>
            Reset Password
          </p>
        </div>
      )}

      {/* <UserEditSection /> */}
    </div>
  );
};
export default MyAccount;
