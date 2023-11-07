import { NewCourseFormType } from '@/app/add-new-course/page';
import { BankDetailsType, GeneralDetailsType } from '@/app/signup/page';

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

// will check for general details data and set error
export const isValidFormData = (
  data: NewCourseFormType,
  handleGeneralDetailsError: (arg1: string, arg2: string) => void
) => {
  let flag = true;
  if (!data.courseName) {
    handleGeneralDetailsError('courseName', 'course name is required!');
    flag = false;
  }
  if (!data.overview) {
    handleGeneralDetailsError('overview', 'overview is required!');
    flag = false;
  }
  if (!data.courseLanguages || data.courseLanguages.length == 0) {
    handleGeneralDetailsError(
      'courseLanguages',
      'course languages is required!'
    );
    flag = false;
  }
  if (!data?.courseCredit) {
    handleGeneralDetailsError('courseCredit', 'course credit is required!');
    flag = false;
  }
  if (!data?.courseImage) {
    handleGeneralDetailsError('courseImage', 'course image is required!');
    flag = false;
  }
  if (!data?.courseLink) {
    handleGeneralDetailsError('courseLink', 'course link is required!');
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
    /[!@#$%^&*]/.test(password)
  );
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
  if (!data.organization) {
    handleGeneralDetailsError('organization', 'organization is required!');
    flag = false;
  }
  if (!data.organizationLogo) {
    handleGeneralDetailsError(
      'organizationLogo',
      'organization logo is required!'
    );
    flag = false;
  }
  if (!data?.phoneNumber || data.phoneNumber.length !== 10) {
    handleGeneralDetailsError(
      'phoneNumber',
      !data?.phoneNumber
        ? 'phone number is required!'
        : 'phone number is not valid!'
    );
    flag = false;
  }
  if (!data?.password || !isValidPassword(data?.password)) {
    const errorMessage = !data?.password
      ? 'password is required!'
      : 'Password must be 8 characters or longer with at least one uppercase, one lowercase, and one special character';
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
  if (!data.branch) {
    handleBankDetailsError('branch', 'branch name is required!');

    flag = false;
  }
  if (!data.accountNumber) {
    handleBankDetailsError('accountNumber', 'account number logo is required!');
    flag = false;
  }
  if (!data?.IFSCCode) {
    handleBankDetailsError('IFSCCode', 'IFSC code is required!');
    flag = false;
  }
  if (!data?.PANNumber) {
    handleBankDetailsError('PANNumber', 'PAN Number is required!');
    flag = false;
  }
  if (!data?.GSTNumber) {
    handleBankDetailsError('GSTNumber', 'GST is required!');
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
