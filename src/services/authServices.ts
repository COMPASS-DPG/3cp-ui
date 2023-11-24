import axios from 'axios';

type LoginPayloadType = {
  email: string;
  password: string;
};

export const userLogin = async (payload: LoginPayloadType) => {
  const data = await axios.post(
    'http://localhost:3000/api/provider/login',
    payload
  );
  return data.data;
};

type SignupPayloadType = {
  name: string;
  orgLogo: string;
  orgName: string;
  phone: string;
  email: string;
  password: string;
  paymentInfo: {
    bankName: string;
    branchName: string;
    accNo: number;
    IFSC: string;
    PANnumber: string;
    GSTnumber: string;
  };
};

type ResetPasswordType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const userSignup = async (payload: SignupPayloadType) => {
  const data = await axios.post(
    'http://localhost:3000/api/provider/signup',
    payload
  );
  return data.data.data;
};

export const emailRegisterCheck = async (payload: { email: string }) => {
  const data = await axios.post(`http://localhost:3000/api/provider`, payload);
  return data.data.data;
};

export const userResetPassword = async (payload: ResetPasswordType) => {
  const data = await axios.post(
    'http://localhost:3000/api/provider/signup',
    payload
  );
  return data.data;
};
