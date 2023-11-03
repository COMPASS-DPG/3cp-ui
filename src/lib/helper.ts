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
  if (!data?.phoneNumber) {
    handleGeneralDetailsError('phoneNumber', 'phone number is required!');
    flag = false;
  }
  if (!data?.password) {
    handleGeneralDetailsError('password', 'password is required!');
    flag = false;
  }
  if (!data?.confirmPassword) {
    handleGeneralDetailsError(
      'confirmPassword',
      'confirm password is required!'
    );
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
  return flag;
};
