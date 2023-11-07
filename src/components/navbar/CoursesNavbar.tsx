'use client';
import ButtonFill from '../button/ButtonFill';
import { outfit } from '../FontFamily';
import { PlusLogo } from '../../../public/svg';

const CoursesNavbar = ({
  activeComponent,
  handleActiveComponent,
}: {
  activeComponent: string;
  handleActiveComponent: (value: string) => void;
}) => {
  return (
    <div
      className={`border-[#ECECEC]' mx-7 mt-5 flex justify-between border-b-2 ${outfit.className}`}
    >
      <div className='flex  gap-5'>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent === 'approvedCourses'
              ? 'border-b-[3px] border-black'
              : ''
          } `}
        >
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'approvedCourses'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleActiveComponent('approvedCourses')}
          >
            Approved Courses
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'pendingApproval' &&
            'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'pendingApproval'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleActiveComponent('pendingApproval')}
          >
            Pending For Approval
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'rejectedCourse' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'rejectedCourse'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleActiveComponent('rejectedCourse')}
          >
            Rejected Course
          </nav>
        </div>
        <div
          className={`flex justify-center px-2.5 pb-4 pt-2.5 align-middle ${
            activeComponent == 'archived' && 'border-b-[3px] border-black'
          } `}
        >
          {' '}
          <nav
            className={`cursor-pointer text-[20px] font-semibold  ${
              activeComponent == 'archived'
                ? 'text-[#272728]'
                : 'text-[#65758C]'
            }`}
            onClick={() => handleActiveComponent('archived')}
          >
            Archived
          </nav>
        </div>
      </div>
      <div className='flex  items-center justify-center align-middle'>
        <ButtonFill
          onClick={() => null}
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
