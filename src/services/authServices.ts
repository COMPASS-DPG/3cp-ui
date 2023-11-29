import axios from 'axios';

// import { SignupPropType } from '@/components/signupComponent/UserDetailsModal';

type LoginPayloadType = {
  email: string;
  password: string;
};

type ResetPasswordType = {
  oldPassword: string;
  newPassword: string;
};

export const userLogin = async (payload: LoginPayloadType) => {
  const data = await axios.post(
    'http://localhost:3000/api/provider/login',
    payload
  );
  return data.data;
};

export const userSignup = async (payload: FormData) => {
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

export const userResetPassword = async (
  providerId: string,
  payload: ResetPasswordType
) => {
  const data = await axios.patch(
    `http://localhost:3000/api/provider/${providerId}/reset-password`,
    payload
  );
  return data.data.data;
};
