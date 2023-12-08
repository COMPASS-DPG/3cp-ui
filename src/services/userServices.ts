import axios from 'axios';

export const getProviderProfileDetails = async (providerId: string) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/profile`
  );
  return data.data.data;
};

export const updateProviderProfileDetails = async (
  providerId: string,
  payload: FormData
) => {
  const data = await axios.put(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/profile`,
    payload
  );
  return data.data.data;
};

export const addCourse = async (providerId: string, payload: FormData) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/course`,
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
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/course/${courseId}`,
    payload
  );
  return data.data.data;
};

export const getCourseByProviderId = async (providerId: string) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/course`
  );
  return data.data.data;
};

export const deleteCourseByProvideIdAndCourseId = async (
  providerId: string,
  courseId: string
) => {
  const data = await axios.delete(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/course/${courseId}`
  );
  return data.data.data;
};

export const archiveAndUnarchiveCourseByProvideIdAndCourseId = async (
  providerId: string,
  courseId: string,
  payload: { status: string }
) => {
  const data = await axios.patch(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/course/${courseId}/status`,
    payload
  );
  return data.data.data;
};

export const getAllCourseTransactions = async (providerId: string) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_COURSE_MANAGER_BACKEND_URL}/api/provider/${providerId}/course/transactions`
  );
  return data.data.data;
};
