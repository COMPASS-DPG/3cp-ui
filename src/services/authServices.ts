import axios from 'axios';

import { SignupPropType } from '@/components/signupComponent/UserDetailsModal';

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

type ResetPasswordType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const userSignup = async (payload: SignupPropType) => {
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
