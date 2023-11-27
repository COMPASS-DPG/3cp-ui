import { useState } from 'react';
import { toast } from 'react-toastify';

import { isValidUserProfileDetails } from '@/lib/helper';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
import { capitalizeName } from '@/components/capitalizeName';
import InputTag from '@/components/inputtag/InputTag';
import Label from '@/components/Label';

import { PaymentInfoType, userType } from '@/app/my-account/page';
import { updateProviderProfileDetails } from '@/services/userServices';

const getEmptyError = () => {
  return {
    name: '',
    bankName: '',
    branchName: '',
    accNo: '',
    PANnumber: '',
    GSTnumber: '',
    IFSC: '',
  };
};

type UserDetailsErrorType = {
  [key: string]: string;
  name: string;
  bankName: string;
  branchName: string;
  accNo: string;
  PANnumber: string;
  GSTnumber: string;
  IFSC: string;
};

// "name": "Vijay Salgaonkar",
//         "email": "ankit@gmail.com",
//         "password": "$2b$10$dcHhYpYwl0RRhGX0Pet3mO5ZTpI126u2h8d9l04RNq3a8NHLICysS",
//         "orgName": "edX",
//         "orgLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png",
//         "phone": "+919082528791",
//         "paymentInfo": {
//             "IFSC": "HDFC0000009",
//             "accNo": "8483654687",
//             "bankName": "HDFC",
//             "GSTnumber": "123",
//             "PANnumber": "123",
//             "branchName": "HSR Layout"
//         }

type PropType = {
  providerId: string;
  user: userType;
  setShowEditSection: (val: boolean) => void;
  getUserProfile: () => void;
};

const UserEditSection = ({
  getUserProfile,
  providerId,
  user,
  setShowEditSection,
}: PropType) => {
  //user details
  const [userDetail, setUserDetail] = useState(user);

  // errors
  const [error, setError] = useState<UserDetailsErrorType>(getEmptyError());

  // will set error
  const handleError = (key: string, value: string) => {
    setError((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  // set value and error to empty string
  const handleInputChange = (
    key: string,
    errorKey: string,
    value: string | PaymentInfoType
  ) => {
    if (error?.[errorKey]) {
      setError((pre) => {
        return {
          ...pre,
          [errorKey]: '',
        };
      });
    }
    setUserDetail((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // validate data and update the user details
  const handleUpload = () => {
    if (isValidUserProfileDetails(userDetail, handleError)) {
      (async () => {
        const userData = {
          email: userDetail.email,
          name: userDetail.name,
          orgLogo: userDetail.orgLogo,
          orgName: userDetail.orgName,
          paymentInfo: userDetail.paymentInfo,
          phone: userDetail.phone,
        };
        try {
          await updateProviderProfileDetails(providerId, userData);
          setShowEditSection(false);
          getUserProfile();
          toast.success('data updated successfully');
        } catch (error) {
          // Handle any errors that occur during the API call
          // eslint-disable-next-line no-console
          console.error('API call error:', error);
          toast.error('something went wrong try again');
        }
      })();
    }
  };

  return (
    <div className='p-5 text-[#272728]'>
      {/* general details */}
      <div>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          General Details
        </p>

        <div className='mt-5 flex w-full gap-12'>
          <div className='flex flex-1 flex-col'>
            <Label text='Name' />
            <InputTag
              value={userDetail?.name}
              onChange={(value) =>
                handleInputChange('name', 'name', capitalizeName(value))
              }
              placeholder='Enter Name (of the account moderator)'
              errorMessage={error?.name}
            />
          </div>
          <div className='flex flex-1 flex-col'>
            <Label text='Organization' />
            <InputTag
              value={userDetail?.orgName}
              onChange={(value) =>
                handleInputChange('organization', 'organization', value)
              }
              placeholder='Enter Name (of the account moderator)'
              disabled={true}
            />
          </div>
          <div className='flex flex-1 flex-col'>
            <Label text='Email' />
            <InputTag
              value={userDetail?.email}
              onChange={(value) => handleInputChange('email', 'email', value)}
              placeholder='Enter Email'
              disabled={true}
            />
          </div>
        </div>
      </div>
      {/* Banking Details */}
      <div className='mt-10'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          Banking Details
        </p>
        {/* first row */}
        <div className='mt-5 flex w-full gap-12'>
          <div className='flex flex-1 flex-col'>
            <Label text='Bank Name' />
            <InputTag
              value={userDetail?.paymentInfo?.bankName}
              placeholder='Enter Bank Name'
              onChange={(value) =>
                handleInputChange('paymentInfo', 'bankName', {
                  ...userDetail?.paymentInfo,
                  bankName: value,
                })
              }
              errorMessage={error?.bankName}
            />
          </div>
          <div className='flex flex-1 flex-col'>
            <Label text='Branch' />
            <InputTag
              value={userDetail?.paymentInfo?.branchName}
              placeholder='Enter Branch Name'
              onChange={(value) =>
                handleInputChange('paymentInfo', 'branchName', {
                  ...userDetail?.paymentInfo,
                  branchName: value,
                })
              }
              errorMessage={error?.branchName}
            />
          </div>
          <div className='flex flex-1 flex-col'>
            <Label text='Account Number' />
            <InputTag
              value={userDetail?.paymentInfo?.accNo}
              type='number'
              placeholder='Enter Account Number '
              onChange={(value) =>
                handleInputChange('paymentInfo', 'accNo', {
                  ...userDetail?.paymentInfo,
                  accNo: value,
                })
              }
              errorMessage={error?.accNo}
            />
          </div>
        </div>
        {/* second row */}
        <div className='mt-5 flex w-full gap-12'>
          <div className='flex flex-1 flex-col'>
            <Label text='IFSC Code' />
            <InputTag
              value={userDetail?.paymentInfo?.IFSC}
              placeholder='Enter IFSC Name'
              onChange={(value) =>
                handleInputChange('paymentInfo', 'IFSC', {
                  ...userDetail?.paymentInfo,
                  IFSC: value,
                })
              }
              errorMessage={error?.IFSC}
            />
          </div>
          <div className='flex flex-1 flex-col'>
            <Label text='PAN Number' />
            <InputTag
              value={userDetail?.paymentInfo?.PANnumber}
              placeholder='Enter PAN Number'
              onChange={(value) =>
                handleInputChange('paymentInfo', 'PANNumber', {
                  ...userDetail?.paymentInfo,
                  PANnumber: value,
                })
              }
              errorMessage={error?.PANNumber}
            />
          </div>
          <div className='flex flex-1 flex-col'>
            <Label text='GST' />
            <InputTag
              value={userDetail?.paymentInfo?.GSTnumber}
              placeholder='Enter GST Number'
              onChange={(value) =>
                handleInputChange('paymentInfo', 'GSTNumber', {
                  ...userDetail?.paymentInfo,
                  GSTnumber: value,
                })
              }
              errorMessage={error?.GSTNumber}
            />
          </div>
        </div>
      </div>
      {/* button section */}
      <div className='mt-20 flex justify-end gap-10'>
        <ButtonOutline
          onClick={() => setShowEditSection(false)}
          classes='w-[180px] border border-[#385B8B]'
        >
          Cancel
        </ButtonOutline>
        <ButtonFill onClick={handleUpload} classes='w-[180px] bg-[#385B8B]'>
          Update
        </ButtonFill>
      </div>
    </div>
  );
};
export default UserEditSection;
