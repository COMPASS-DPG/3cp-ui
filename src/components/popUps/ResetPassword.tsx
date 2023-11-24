import { useState } from 'react';
import { toast } from 'react-toastify';

import { validateResetPasswordForm } from '@/lib/helper';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
import PasswordInput from '@/components/inputtag/PasswordInput';
import Label from '@/components/Label';

import { userResetPassword } from '@/services/authServices';

// initial values
const getEmptyValue = () => {
  return {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
};

export type ResetPasswordDataType = {
  [key: string]: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = ({ onClose }: { onClose: () => void }) => {
  const [formInput, setFormInput] = useState(getEmptyValue());
  const [error, setError] = useState<ResetPasswordDataType>(getEmptyValue());

  // will set error to empty string and values
  const handleChange = (key: string, value: string) => {
    if (error?.[key]) {
      setError((prev) => {
        return {
          ...prev,
          [key]: '',
        };
      });
    }
    setFormInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  // will set errors
  const handleError = (key: string, errorMessage: string) => {
    setError((prev) => {
      return {
        ...prev,
        [key]: errorMessage,
      };
    });
  };

  // validate and reset password
  const handleUpdatePassword = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateResetPasswordForm(formInput, handleError)) {
      (async () => {
        try {
          await userResetPassword(formInput);
          onClose();
        } catch (error) {
          // Handle any errors that occur during the API call
          // eslint-disable-next-line no-console
          console.error('API call error:', error);
          toast.error('something went wrong please try again');
        }
      })();
    }
  };

  return (
    <div className='px-12 text-[16px] font-medium text-[#000]'>
      <div className='py-5 text-center text-[24px] font-semibold'>
        Reset Password
      </div>
      <form className='flex flex-col' onSubmit={handleUpdatePassword}>
        <div className='mb-[20px]'>
          <Label text='Current Password' />
          <PasswordInput
            value={formInput?.currentPassword}
            width='450px'
            onChange={(value) => handleChange('currentPassword', value)}
            placeholder='Current Password'
            errorMessage={error?.currentPassword}
          />
        </div>
        <div className='mb-[20px]'>
          <Label text='New Password' />
          <PasswordInput
            value={formInput?.newPassword}
            width='450px'
            onChange={(value) => handleChange('newPassword', value)}
            placeholder='New Password'
            isConfirmPassword={true}
            errorMessage={error?.newPassword}
          />
        </div>
        <div className='mb-[20px]'>
          <Label text='Confirm Password' />
          <PasswordInput
            value={formInput?.confirmPassword}
            width='450px'
            onChange={(value) => handleChange('confirmPassword', value)}
            placeholder='Confirm Password'
            isConfirmPassword={true}
            errorMessage={error?.confirmPassword}
          />
        </div>
        <div className='my-8  flex gap-6'>
          <ButtonOutline classes='flex-1 border-[#26292D]' onClick={onClose}>
            Cancel
          </ButtonOutline>
          <ButtonFill type='submit' classes='flex-1 bg-[#26292D]'>
            Update
          </ButtonFill>
        </div>
      </form>
    </div>
  );
};
export default ResetPassword;
