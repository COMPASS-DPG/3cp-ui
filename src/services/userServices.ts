import axios from 'axios';

import { userType } from '@/app/my-account/page';
import { CourseType } from '@/app/my-courses/page';

export const getProviderProfileDetails = async (providerId: string) => {
  const data = await axios.get(
    `http://localhost:3000/api/provider/${providerId}/profile`
  );
  return data.data.data;
};

export const updateProviderProfileDetails = async (
  providerId: string,
  payload: userType
) => {
  const data = await axios.put(
    `http://localhost:3000/api/provider/${providerId}/profile`,
    payload
  );
  return data.data.data;
};

export const addCourse = async (providerId: string, payload: CourseType) => {
  const data = await axios.post(
    `http://localhost:3000/api/provider/${providerId}/course`,
    payload
  );
  return data.data.data;
};

export const editCourse = async (
  providerId: string,
  courseId: string,
  payload: FormData
) => {
  const data = await axios.patch(
    `http://localhost:3000/api/provider/${providerId}/course/${courseId}`,
    payload
  );
  return data.data.data;
};

export const getCourseByProviderId = async (providerId: string) => {
  const data = await axios.get(
    `http://localhost:3000/api/provider/${providerId}/course`
  );
  return data.data.data;
};

export const deleteCourseByProvideIdAndCourseId = async (
  providerId: string,
  courseId: string
) => {
  const data = await axios.delete(
    `http://localhost:3000/api/provider/${providerId}/course/${courseId}`
  );
  return data.data.data;
};

export const archiveAndUnarchiveCourseByProvideIdAndCourseId = async (
  providerId: string,
  courseId: string,
  payload: { status: string }
) => {
  const data = await axios.patch(
    `http://localhost:3000/api/provider/${providerId}/course/${courseId}/status`,
    payload
  );
  return data.data.data;
};

export const getAllCourseTransactions = async (providerId: string) => {
  const data = await axios.get(
    `http://localhost:3000/api/provider/${providerId}/course/transactions`
  );
  return data.data.data;
};
