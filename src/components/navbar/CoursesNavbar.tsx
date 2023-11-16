'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ButtonFill from '../button/ButtonFill';
import { outfit } from '../FontFamily';
import { PlusLogo } from '../../../public/svg';

const CoursesNavbar = ({
  activeComponent,
  handleActiveComponent,
  handlePopUp,
  filterCourse,
}: {
  activeComponent: string;
  handleActiveComponent: (value: string) => void;
  handlePopUp: (value: boolean) => void;
  filterCourse: (value: string) => void;
}) => {
  const [accountStatus, setAccountStatus] = useState('reject');

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/user1').then((response) => {
      const userData = response.data;
      const status = userData[0].state;
      setAccountStatus(status);
    });
  }, []);

  const handleAddNewCourseButton = () => {
    if (accountStatus === 'verified') {
      //do nothing
    } else {
      handlePopUp(true);
    }
  };

  const handleClick = (type: string) => {
    handleActiveComponent(type);
    if (type === 'approvedSection') {
      filterCourse('verified');
    } else if (type === 'pendingSection') {
      filterCourse('pending');
    } else if (type === 'rejectedSection') {
      filterCourse('rejected');
    } else {
      filterCourse('archived');
    }
  };
  return (
    <div
      className={`border-[#ECECEC]' mx-7 mt-5 flex justify-between border-b-2 ${outfit.className}`}
    >
      <div className='flex  gap-5'>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent === 'approvedSection'
              ? 'border-b-[3px] border-black'
              : ''
          } `}
        >
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'approvedSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('approvedSection')}
          >
            Approved Courses
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'pendingSection' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'pendingSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('pendingSection')}
          >
            Pending For Approval
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'rejectedSection' &&
            'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'rejectedSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('rejectedSection')}
          >
            Rejected Course
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'archivedSection' &&
            'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'archivedSection'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('archivedSection')}
          >
            Archived
          </nav>
        </div>
      </div>
      <div className='flex  items-center justify-center align-middle'>
        <ButtonFill
          onClick={handleAddNewCourseButton}
          classes='bg-[#4ACB5F] w-[180px] h-[40px] flex items-center gap-1 justify-center'
        >
          <span>
            <PlusLogo width='16' />
          </span>{' '}
          Add New Course
        </ButtonFill>
      </div>
    </div>
  );
};
export default CoursesNavbar;
