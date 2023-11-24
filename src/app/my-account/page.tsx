'use client';
import { useState } from 'react';
import { RiKey2Fill } from 'react-icons/ri';

import CommonModal from '@/components/CommonModal';
import MyAccountTopBar from '@/components/myAccount/MyAccountTopbar';
import UserDetails from '@/components/myAccount/UserDetails';
import UserEditSection from '@/components/myAccount/UserEditSection';
import ResetPassword from '@/components/popUps/ResetPassword';

import { useAuthContext } from '@/context/AuthContext';

export type PaymentInfoType = {
  accNo: string;
  bankName: string;
  branchName: string;
  IFSC: string;
  PANnumber: string;
  GSTnumber: string;
};

export type userType = {
  id?: number;
  name: string;
  paymentInfo: PaymentInfoType;
  orgName: string;
  orgLogo: string;
  phone: string;
  email: string;
  status?: string;
  rejectionReason?: string | null;
};
const MyAccount = () => {
  const { providerId, userProfileData, handleUserProfile } = useAuthContext();
  // const [user, setUser] = useState<userType>(getInitialValue());
  const [showEditSection, setShowEditSection] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (!showEditSection) {
  //     (async () => {
  //       try {
  //         const data = await getProviderProfileDetails(providerId);
  //         setUser(data)
  //       } catch (error) {
  //         // Handle any errors that occur during the API call
  //         // eslint-disable-next-line no-console
  //         console.error('API call error:', error);
  //         toast.error('something went wrong');
  //       }
  //     })()
  //   }
  // }, [providerId, showEditSection]);

  return (
    <div className='relative mb-10 px-[30px]'>
      <CommonModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCrossShow={false}
        width='max-w-xl'
      >
        <ResetPassword onClose={() => setIsOpen(false)} />
      </CommonModal>
      <MyAccountTopBar
        user={userProfileData}
        setShowEditSection={setShowEditSection}
      />

      {showEditSection ? (
        <UserEditSection
          getUserProfile={handleUserProfile}
          providerId={providerId}
          user={userProfileData}
          setShowEditSection={setShowEditSection}
        />
      ) : (
        <UserDetails user={userProfileData} />
      )}

      {userProfileData?.status != 'REJECTED' && (
        <div
          className='flex items-center gap-1 text-[#385B8B]'
          onClick={() => setIsOpen(true)}
        >
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
