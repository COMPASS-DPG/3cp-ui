'use client';

import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/context/AuthContext';

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
  const { userProfileData } = useAuthContext();
  const router = useRouter();

  const handleAddNewCourseButton = () => {
    if (userProfileData?.status === 'VERIFIED') {
      router.push('/my-courses/add-new-course');
    } else {
      handlePopUp(true);
    }
  };

  const handleClick = (type: string) => {
    handleActiveComponent(type);
    filterCourse(type);
  };
  return (
    <div
      className={`border-[#ECECEC]' mx-7 mt-5 flex justify-between border-b-2 ${outfit.className}`}
    >
      <div className='flex  gap-5'>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent === 'ACCEPTED' ? 'border-b-[3px] border-black' : ''
          } `}
        >
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'ACCEPTED'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('ACCEPTED')}
          >
            Approved Courses
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'PENDING' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'PENDING' ? 'text-[#272728]' : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('PENDING')}
          >
            Pending For Approval
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'REJECTED' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'REJECTED'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('REJECTED')}
          >
            Rejected Course
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'ARCHIVED' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'ARCHIVED'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleClick('ARCHIVED')}
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
