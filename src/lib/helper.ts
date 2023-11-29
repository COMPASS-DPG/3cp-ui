import { ResetPasswordDataType } from '@/components/popUps/ResetPassword';

import { userType } from '@/app/my-account/page';
import { NewCourseFormType } from '@/app/my-courses/[add-course]/page';
import { BankDetailsType, GeneralDetailsType } from '@/app/sign-up/page';

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

function isValidURL(url: string) {
  // Regular expression for a basic URL validation
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // Test the URL against the regex
  return !urlRegex.test(url);
}

// will check for general details data and set error
export const isValidFormData = (
  data: NewCourseFormType,
  handleGeneralDetailsError: (arg1: string, arg2: string) => void
) => {
  let flag = true;
  if (!data?.title) {
    handleGeneralDetailsError('title', 'course name is required!');
    flag = false;
  }
  if (!data?.description) {
    handleGeneralDetailsError('description', 'overview is required!');
    flag = false;
  }
  if (!data?.language || data?.language?.length == 0) {
    handleGeneralDetailsError('language', 'course languages is required!');
    flag = false;
  }
  if (!data?.credits) {
    handleGeneralDetailsError('credits', 'course credit is required!');
    flag = false;
  }
  if (!data?.imgLink) {
    handleGeneralDetailsError('imgLink', 'course image is required!');
    flag = false;
  }
  if (!data?.courseLink || isValidURL(data?.courseLink)) {
    handleGeneralDetailsError(
      'courseLink',
      isValidURL(data?.courseLink) && data?.courseLink
        ? 'please enter valid course URL!'
        : 'course link is required!'
    );
    flag = false;
  }
  if (!data?.author) {
    handleGeneralDetailsError('author', 'author is required!');
    flag = false;
  }
  if (!data?.startDate) {
    handleGeneralDetailsError('startDate', 'start date is required!');
    flag = false;
  }
  if (!data?.endDate) {
    handleGeneralDetailsError('endDate', 'end date is required!');
    flag = false;
  }

  return flag;
};

export const isValidPassword = (password: string) => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password)
  );
};

export const validatePassword = (
  password: string,
  setPasswordError: (arg: string) => void
) => {
  if (!password || !isValidPassword(password)) {
    !password
      ? setPasswordError('please enter password')
      : setPasswordError(
          'Password must be 8 characters or longer with at least one uppercase, one lowercase,one number, and one special character'
        );
    return false;
  } else {
    return true;
  }
};

export const validateResetPasswordForm = (
  data: ResetPasswordDataType,
  handleError: (arg1: string, arg2: string) => void
) => {
  let flag = true;
  if (!data?.currentPassword || !isValidPassword(data?.currentPassword)) {
    const errorMessage = !data?.currentPassword
      ? 'current password is required!'
      : 'Password must be 8 characters or longer with at least one uppercase, one lowercase,one number, and one special character';
    handleError('currentPassword', errorMessage);
    flag = false;
  }
  if (!data?.newPassword || !isValidPassword(data?.newPassword)) {
    const errorMessage = !data?.newPassword
      ? 'new password is required!'
      : 'Password must be 8 characters or longer with at least one uppercase, one lowercase,one number, and one special character';
    handleError('newPassword', errorMessage);
    flag = false;
  }
  if (!data?.confirmPassword || data.newPassword !== data.confirmPassword) {
    const errorMessage = !data?.confirmPassword
      ? 'confirm password is required!'
      : 'new password and confirm password must be same';
    handleError('confirmPassword', errorMessage);
    flag = false;
  }
  return flag;
};

// will check for valid email
export const validateEmail = (
  email: string,
  setEmailError: (arg: string) => void
) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email === '') {
    setEmailError('please enter email!');
    return false;
  } else {
    if (regex.test(email)) {
      return true;
    } else {
      setEmailError('email is not valid!');
      return false;
    }
  }
};

// will check for general details data and set error
export const isValidGeneralDetails = (
  data: GeneralDetailsType,
  handleGeneralDetailsError: (arg1: string, arg2: string) => void
) => {
  let flag = true;
  if (!data.name) {
    handleGeneralDetailsError('name', 'name is required!');
    flag = false;
  }
  if (!data.orgName) {
    handleGeneralDetailsError('orgName', 'organization is required!');
    flag = false;
  }
  if (!data.orgLogo) {
    handleGeneralDetailsError('orgLogo', 'organization logo is required!');
    flag = false;
  }
  if (!data?.phone || data.phone.length !== 10) {
    handleGeneralDetailsError(
      'phone',
      !data?.phone ? 'phone number is required!' : 'phone number is not valid!'
    );
    flag = false;
  }
  if (!data?.password || !isValidPassword(data?.password)) {
    const errorMessage = !data?.password
      ? 'password is required!'
      : 'Password must be 8 characters or longer with at least one uppercase, one lowercase,one number, and one special character';
    handleGeneralDetailsError('password', errorMessage);
    flag = false;
  }
  if (!data?.confirmPassword || data.password !== data.confirmPassword) {
    const errorMessage = !data?.confirmPassword
      ? 'confirm password is required!'
      : 'password and confirm password must be same';
    handleGeneralDetailsError('confirmPassword', errorMessage);
    flag = false;
  }

  return flag;
};

// will check for bank details data and set error
export const isValidBankDetails = (
  data: BankDetailsType,
  handleBankDetailsError: (arg1: string, arg2: string) => void
) => {
  let flag = true;
  if (!data.bankName) {
    handleBankDetailsError('bankName', 'bank name is required!');
    flag = false;
  }
  if (!data.branchName) {
    handleBankDetailsError('branchName', 'branch name is required!');

    flag = false;
  }
  if (!data.accNo) {
    handleBankDetailsError('accNo', 'account number is required!');
    flag = false;
  }
  if (!data?.IFSC) {
    handleBankDetailsError('IFSC', 'IFSC code is required!');
    flag = false;
  }
  if (!data?.PANnumber) {
    handleBankDetailsError('PANnumber', 'PAN Number is required!');
    flag = false;
  }
  if (!data?.GSTnumber) {
    handleBankDetailsError('GSTnumber', 'GST is required!');
    flag = false;
  }
  return flag;
};

// will check for bank details data and set error
export const isValidUserProfileDetails = (
  data: userType,
  handleBankDetailsError: (arg1: string, arg2: string) => void
) => {
  let flag = true;
  if (!data?.name) {
    handleBankDetailsError('name', 'name is required!');
    flag = false;
  }
  if (!data?.paymentInfo?.bankName) {
    handleBankDetailsError('bankName', 'bank name is required!');
    flag = false;
  }
  if (!data?.paymentInfo?.branchName) {
    handleBankDetailsError('branchName', 'branch name is required!');

    flag = false;
  }
  if (!data.paymentInfo?.accNo) {
    handleBankDetailsError('accNo', 'account number is required!');
    flag = false;
  }
  if (!data?.paymentInfo?.IFSC) {
    handleBankDetailsError('IFSC', 'IFSC code is required!');
    flag = false;
  }
  if (!data?.paymentInfo?.PANnumber) {
    handleBankDetailsError('PANnumber', 'PAN Number is required!');
    flag = false;
  }
  if (!data?.paymentInfo?.GSTnumber) {
    handleBankDetailsError('GSTnumber', 'GST is required!');
    flag = false;
  }
  return flag;
};

export const fileToBase64Image = (
  file: File,
  handleImage: (arg: string) => void
) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    const binaryData: string | null | ArrayBuffer | undefined =
      e?.target?.result;

    if (binaryData !== null && typeof binaryData === 'string') {
      const base64String = window.btoa(binaryData);
      handleImage(base64String);
    }
  };

  const img = reader.readAsBinaryString(file);

  return img;
};
