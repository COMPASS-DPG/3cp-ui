import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';
import Pagination from '@/components/transection/Pagination';

type UserType = {
  courseId: number;
  courseName: string;
  courseStartDate: string;
  courseEndDate: string;
  credits: number;
  enrolledUsers: number;
  totalIncome: number;
};
const TransectionTable = () => {
  const [userTransectionData, setUserTransectionData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/user1').then((response) => {
      const userData = response.data;
      const transectionList = userData[0].transactions;
      setUserTransectionData(transectionList);
      setTotal(transectionList.length);
    });
  }, []);

  return (
    <>
      <div className='relative mt-5 overflow-x-auto shadow-md sm:rounded-md'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead
            className={`bg-[#385B8B] text-sm font-normal text-white ${outfit.className}`}
          >
            <tr>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Course Name
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Course Start Date
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Course End Date
              </th>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Credits
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Enrolled Users
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Total Income
              </th>
            </tr>
          </thead>
          <tbody>
            {userTransectionData.map((user: UserType) => {
              return (
                <tr
                  key={user?.courseId}
                  className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
                >
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.courseName}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.courseStartDate}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.courseEndDate}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.credits}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.enrolledUsers}
                  </td>
                  <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                    {user.totalIncome}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          handleLimit={(value: number) => setLimit(value)}
          limit={limit}
          total={total}
          page={page}
          handlePage={(value: number) => setPage(value)}
        />
      </div>
    </>
  );
};
export default TransectionTable;
