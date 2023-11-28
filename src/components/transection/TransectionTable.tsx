import React, { useState } from 'react';

import { outfit } from '@/components/FontFamily';
import Pagination from '@/components/transection/Pagination';
import SearchTransection from '@/components/transection/SearchTransection';

import {
  CourseTransactionDataType,
  searchInputType,
} from '@/app/transections/page';

type PropType = {
  userData: CourseTransactionDataType[];
  filterUserData: CourseTransactionDataType[];
  setFilterUserData: (arg: CourseTransactionDataType[]) => void;
};

const getEmptySearchData = () => {
  return {
    text: '',
    date: null,
  };
};

const TransectionTable = ({
  userData,
  filterUserData,
  setFilterUserData,
}: PropType) => {
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<searchInputType>(
    getEmptySearchData()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalIncome: number = userData.reduce(
    (sum, obj) => sum + obj?.income,
    0
  );

  const totalPages = Math.ceil(filterUserData?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filterUserData?.slice(startIndex, endIndex);

  const handleSearch = () => {
    // if user want to reset search
    if (!showSearch) {
      setSearchInput(getEmptySearchData());
      setFilterUserData(userData);
      setShowSearch(true);
      return;
    }

    const searchedData = userData.filter(
      (course: CourseTransactionDataType) => {
        const startDate =
          typeof course?.startDate === 'string'
            ? new Date(course?.startDate)
            : course?.startDate;

        const courseNameMatch =
          !searchInput?.text ||
          course.courseName
            .toLowerCase()
            .includes(searchInput?.text.toLowerCase());
        const startDateMatch =
          !searchInput?.date ||
          startDate?.toLocaleDateString('en-GB') ===
            new Date(searchInput?.date).toLocaleDateString('en-GB');
        return courseNameMatch && startDateMatch;
      }
    );
    setShowSearch(false);
    setFilterUserData(searchedData);

    if (currentPage != 1) setCurrentPage(1);
  };

  return (
    <>
      <SearchTransection
        totalIncome={totalIncome}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <div className='relative mt-5 overflow-x-auto shadow-md sm:rounded-md'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead
            className={`bg-[#385B8B] text-sm font-normal text-white ${outfit.className}`}
          >
            <tr>
              <th scope='col' className='px-6 py-3 text-sm font-normal'>
                Course Name
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Course Start Date
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
                Course End Date
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-center text-sm font-normal'
              >
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
            {currentData.length == 0 && (
              <tr
                className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
              >
                <td
                  align='center'
                  colSpan={6}
                  className={` px-6 py-[14px] text-center 
             text-sm  font-normal text-[#272728]`}
                >
                  No Result Found
                </td>
              </tr>
            )}
            {currentData.length > 0 &&
              currentData?.map((user: CourseTransactionDataType) => {
                return (
                  <tr
                    key={user?.courseId}
                    className={`border-b bg-white hover:bg-gray-50 ${outfit.className}`}
                  >
                    <td className='px-6 py-[14px] text-sm font-normal text-[#272728]'>
                      {user?.courseName}
                    </td>
                    <td className='px-6 py-[14px] text-center text-sm font-normal text-[#272728]'>
                      {user?.startDate
                        ? new Date(user.startDate).toLocaleDateString('en-GB')
                        : '--'}
                    </td>
                    <td className='px-6 py-[14px] text-center text-sm font-normal text-[#272728]'>
                      {user?.endDate
                        ? new Date(user.endDate).toLocaleDateString('en-GB')
                        : '--'}
                    </td>
                    <td className='px-6 py-[14px] text-center text-sm font-normal text-[#272728]'>
                      {user?.credits}
                    </td>
                    <td className='px-6 py-[14px] text-center text-sm font-normal  text-[#272728]'>
                      {user?.numConsumersEnrolled}
                    </td>
                    <td className='px-6 py-[14px] text-center text-sm font-normal  text-[#272728]'>
                      {user?.income}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          currentDataLength={currentData?.length}
          handlePageSize={(value: number) => setPageSize(value)}
          pageSize={pageSize}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePage={(value: number) => setCurrentPage(value)}
        />
      </div>
    </>
  );
};
export default TransectionTable;
