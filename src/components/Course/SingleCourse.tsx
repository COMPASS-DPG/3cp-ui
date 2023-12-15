import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillStar, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { BiSolidArchiveIn } from 'react-icons/bi';
import { BsFillPencilFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';
import { toast } from 'react-toastify';

import RejectSummary from '@/components/Course/RejectSummary';
import ColoredText from '@/components/text/ColoredText';

import { CourseType } from '@/app/my-courses/page';
import {
  archiveAndUnarchiveCourseByProvideIdAndCourseId,
  deleteCourseByProvideIdAndCourseId,
} from '@/services/userServices';

// import CourseImage from '~/images/courseProvider.png'
const languageColors = [
  'bg-[#DAFFDA] text-[#4ACB5F]',
  'bg-[#C7DEFF] text-[#385B8B]',
];

const SingleCourse = ({
  activeComponenet,
  course,
  handleFetchData,
}: {
  activeComponenet: string;
  course: CourseType;
  handleFetchData: () => void;
}) => {
  const [showSummary, setShowSummary] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const popupRef = useRef(null);

  // will delete course
  const handleDeleteCourse = async () => {
    try {
      const providerId: string = course?.providerId ?? '';
      const courseId: string = course?.courseId ?? '';
      await deleteCourseByProvideIdAndCourseId(providerId, courseId);
      handleFetchData();
      toast.success('course deleted successfully', {
        draggable: false,
      });
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.error('API call error:', error);
      toast.error('something went wrong', {
        draggable: false,
      });
    }
  };

  // handle archive and unarchive using provider and user id
  const handleArchive = async () => {
    try {
      const providerId: string = course?.providerId ?? '';
      const courseId: string = course?.courseId ?? '';
      let successMessage = 'course archived successfully';
      const request: { status: string } = {
        status: 'ARCHIVED',
      };
      if (activeComponenet === 'ARCHIVED') {
        request.status = 'UNARCHIVED';
        successMessage = 'course unarchive successfully';
      }
      await archiveAndUnarchiveCourseByProvideIdAndCourseId(
        providerId,
        courseId,
        request
      );
      toast.success(successMessage, {
        draggable: false,
      });
      handleFetchData();
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.error('API call error:', error);
      toast.error('something went wrong', {
        draggable: false,
      });
    }
  };

  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      const targetNode = e.target as Node | null;
      if (
        showPopUp &&
        popupRef.current &&
        targetNode &&
        !(popupRef.current as HTMLElement).contains(targetNode)
      ) {
        setShowPopUp(false);
      }
    };
    document.body.addEventListener('click', closeDropDown);
    return () => document.body.removeEventListener('click', closeDropDown);
  }, [showPopUp]);

  return (
    <div className='mb-4 rounded-2xl bg-white p-2.5'>
      <div className='flex gap-4'>
        {/* image */}
        <div className='flex-shrink-0'>
          <Image
            src={
              typeof course?.imageLink === 'string'
                ? `${course?.imageLink}?date=${new Date().getTime()}`
                : ''
            }
            width={100}
            height={100}
            alt='course-image'
            className='rounded-xl'
          />
        </div>
        {/* centeritem */}
        <div className='flex flex-grow flex-col justify-between'>
          <div>
            <p className='pb-2 text-[16px] font-bold text-[#272728]'>
              {course?.title}
            </p>
            <div className='pl-6 '>
              <ol className='grid  list-decimal grid-cols-2 text-[14px] text-[#787878] '>
                {Object.keys(course?.competency)?.map((key) => {
                  return (
                    <li key={key}>
                      {key} ( {course.competency[key].join(', ')} )
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className='flex justify-between '>
            <div className='flex items-end gap-2'>
              <FaUserEdit />
              <p className='text-[14px] font-medium text-[#272728]'>
                {course?.author}
              </p>
              {course?.language.map((item: string, index: number) => {
                return (
                  <ColoredText
                    key={item}
                    text={item.charAt(0).toUpperCase() + item.slice(1)}
                    classes={
                      index % 2 == 0 ? languageColors[0] : languageColors[1]
                    }
                  />
                );
              })}
            </div>
            {/* icon for approved course */}
            {course?.verificationStatus == 'ACCEPTED' && (
              <div className='flex items-end gap-1'>
                <MdVerified
                  width='20px'
                  color={`${
                    activeComponenet === 'ARCHIVED' ? '#999' : '#4ACB5F'
                  }`}
                />
                <p
                  className={`text-[14px] font-medium leading-5 ${
                    activeComponenet === 'ARCHIVED'
                      ? 'text-[#999]'
                      : 'text-[#4ACB5F]'
                  } `}
                >
                  Verified
                </p>
              </div>
            )}
            {/* icon for pending course */}
            {course.verificationStatus == 'PENDING' && (
              <div className='flex items-end gap-1'>
                <GiSandsOfTime
                  width='20px'
                  color={`${
                    activeComponenet === 'ARCHIVED' ? '#999' : '#FF5824'
                  }`}
                />
                <p
                  className={`text-[14px] font-medium leading-5  ${
                    activeComponenet === 'ARCHIVED'
                      ? 'text-[#999]'
                      : 'text-[#FF5824]'
                  }`}
                >
                  Approval Pending
                </p>
              </div>
            )}
            {/* for reject course */}
            {course.verificationStatus == 'REJECTED' && (
              <div className='flex  items-center gap-1'>
                <RxCrossCircled
                  width='20px'
                  color={`${
                    activeComponenet === 'ARCHIVED' ? '#999' : '#FF5674'
                  }`}
                />
                <p
                  className={`text-[14px] font-medium leading-5  ${
                    activeComponenet === 'ARCHIVED'
                      ? 'text-[#999]'
                      : 'text-[#FF5674]'
                  }`}
                >
                  Rejected
                </p>
                <div className='cursor-pointer'>
                  {showSummary ? (
                    <AiOutlineUp
                      width='20px'
                      color={activeComponenet ? '#999' : '#FF5674'}
                      onClick={() => setShowSummary(false)}
                    />
                  ) : (
                    <AiOutlineDown
                      width='20px'
                      color={activeComponenet ? '#999' : '#FF5674'}
                      onClick={() => setShowSummary(true)}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* three dot */}
        <div className='relative flex flex-col items-end justify-between'>
          <div className='flex w-full justify-between'>
            <p className='flex items-center gap-1 text-[14px] font-bold leading-4 text-[#787878]'>
              {course?.avgRating && (
                <>
                  {course.avgRating} <AiFillStar fill='#FFD029' width='12px' />
                </>
              )}
            </p>
            <BsThreeDotsVertical
              className='cursor-pointer'
              size={24}
              onClick={() => setShowPopUp((prev) => !prev)}
            />
          </div>
          <div className='rounded-lg bg-[#FFECAA] px-2.5 py-0.5'>
            <p className='text-[16px] font-bold text-[#272728]'>
              Cr.{course?.credits}
            </p>
          </div>
          {/* course icon */}
          {showPopUp && (
            <div
              ref={popupRef}
              className='absolute right-[-20px] top-7 h-[119px] w-[155px]  rounded-lg border border-[#E3E7EF] bg-[white] text-[14px] leading-6 text-[#272728] shadow-md'
            >
              <div className='flex flex-col p-2 '>
                <Link
                  className='flex cursor-pointer items-center gap-2 rounded-md border-b border-[#E3E7EF] py-1 pl-1 hover:bg-gray-300'
                  href={{
                    pathname: '/my-courses/edit-course',
                    query: { courseId: course?.courseId },
                  }}
                >
                  <BsFillPencilFill /> Edit Course
                </Link>
                <div
                  className='flex cursor-pointer items-center gap-2 rounded-md border-b border-[#E3E7EF] py-1 pl-1 hover:bg-gray-300'
                  onClick={handleArchive}
                >
                  <BiSolidArchiveIn />
                  {activeComponenet === 'ARCHIVED'
                    ? 'Unarchive Course'
                    : 'Archive Course'}
                </div>
                <div
                  className='flex cursor-pointer items-center gap-2 rounded-md py-1 pl-1 hover:bg-gray-300 '
                  onClick={handleDeleteCourse}
                >
                  <RiDeleteBin6Fill /> Delete Course
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rejected Summary {only for rejected component} */}
      {showSummary && (
        <div className='my-4 rounded-lg border border-[#D4D4D4] bg-[#F8F8F8]'>
          <RejectSummary
            rejectionReason={
              course?.rejectionReason ? course?.rejectionReason : ''
            }
          />
        </div>
      )}
    </div>
  );
};
export default SingleCourse;
