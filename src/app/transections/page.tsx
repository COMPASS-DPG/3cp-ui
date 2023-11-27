'use client';

import { useEffect, useState } from 'react';

import TransectionTable from '@/components/transection/TransectionTable';

import { useAuthContext } from '@/context/AuthContext';
import { getAllCourseTransactions } from '@/services/userServices';

export type searchInputType = {
  text: string;
  date: Date | null;
};

export type CourseTransactionDataType = {
  courseId: number;
  courseName: string;
  startDate: Date | null | string;
  endDate: Date | null | string;
  credits: number;
  numConsumersEnrolled: number;
  income: number;
};

const Transections = () => {
  const { providerId } = useAuthContext();
  const [userData, setUserData] = useState<CourseTransactionDataType[]>([]);
  const [filterUserData, setFilterUserData] = useState<
    CourseTransactionDataType[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCourseTransactions(providerId);
        // setLoading(false);
        setUserData(data);
        setFilterUserData(data);
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.error('API call error:', error);
        // setLoading(false);
        // setError(true);
      }
    })();
  }, [providerId]);
  return (
    <div className='p-5'>
      <TransectionTable
        userData={userData}
        filterUserData={filterUserData}
        setFilterUserData={(value) => setFilterUserData(value)}
      />
    </div>
  );
};
export default Transections;
