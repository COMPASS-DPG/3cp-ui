import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { RxCrossCircled } from 'react-icons/rx';

import RejectSummary from '@/components/Course/RejectSummary';
import ColoredText from '@/components/text/ColoredText';

import CourseImage from './../../../public/images/course.png';

import { VerifiedTick } from '~/svg';
const SingleCourse = ({ activeComponenet }: { activeComponenet: string }) => {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <div className='rounded-2xl bg-white p-2.5'>
      <div className='flex gap-4'>
        {/* image */}
        <div className='flex-shrink-0'>
          <Image src={CourseImage} alt='course-image' />
        </div>
        {/* centeritem */}
        <div className='flex flex-grow flex-col justify-between'>
          <div>
            <p className='pb-2 text-[16px] font-bold text-[#272728]'>
              Communication ipsum dolpoid skills
            </p>
            <div className='pl-6 '>
              <ol className='grid  list-decimal grid-cols-2 text-[14px] text-[#787878] '>
                <li>Pregnancy Identification (L1,L2)</li>
                <li>
                  Vaginal Examination and plotting on partograph
                  (L1,L2,L3,L4,L5)
                </li>
                <li>lorem ipsum dolps kihdkkf for PW(L1,L2,L3)</li>
                <li>Birth Planning and preparedness for PW(L1,L2,L3)</li>
              </ol>
            </div>
          </div>
          <div className='flex justify-between '>
            <div className='flex items-center gap-2'>
              <FaUserEdit />
              <p className='text-[14px] font-medium text-[#272728]'>UPTSU</p>
              <ColoredText
                text='English'
                classes='bg-[#DAFFDA] text-[#4ACB5F]'
              />
              <ColoredText text='Hindi' classes='bg-[#C7DEFF] text-[#385B8B]' />
            </div>
            {/* icon for approved course */}
            {activeComponenet == 'approvedCourses' && (
              <div className='flex items-end'>
                <VerifiedTick width='20px' />
                <p className='text-[14px] font-medium leading-5 text-[#4ACB5F]'>
                  Verified
                </p>
              </div>
            )}
            {/* icon for pending course */}
            {activeComponenet == 'pendingApproval' && (
              <div className='flex items-end'>
                <GiSandsOfTime width='20px' color='#FF5824' />
                <p className='text-[14px] font-medium leading-5 text-[#FF5824]'>
                  Approval Pending
                </p>
              </div>
            )}
            {/* for reject course */}
            {activeComponenet == 'rejectedCourse' && (
              <div className='flex  items-end gap-1'>
                <RxCrossCircled width='20px' color='#FF5674' />
                <p className='text-[14px] font-medium leading-5 text-[#FF5674]'>
                  Rejected
                </p>
                <div className='cursor-pointer'>
                  {showSummary ? (
                    <AiOutlineUp
                      width='20px'
                      color='#FF5674'
                      onClick={() => setShowSummary(false)}
                    />
                  ) : (
                    <AiOutlineDown
                      width='20px'
                      color='#FF5674'
                      onClick={() => setShowSummary(true)}
                    />
                  )}
                </div>
              </div>
            )}
            {/* for archieve course */}
            {activeComponenet == 'archived' && (
              <div className='flex items-end'>
                <GiSandsOfTime width='20px' color='#FF5824' />
                <p className='text-[14px] font-medium leading-5 text-[#FF5824]'>
                  Approval Pending
                </p>
              </div>
            )}
          </div>
        </div>
        {/* three dot */}
        <div className='flex flex-col items-end justify-between'>
          <BsThreeDotsVertical size={24} />
          <div className='rounded-lg bg-[#FFECAA] px-2.5 py-0.5'>
            <p className='text-[16px] font-bold text-[#272728]'>Cr.100</p>
          </div>
        </div>
      </div>

      {/* Rejected Summary {only for rejected component} */}
      {showSummary && (
        <div className='my-4 rounded-lg border border-[#D4D4D4] bg-[#F8F8F8]'>
          <RejectSummary />
        </div>
      )}
    </div>
  );
};
export default SingleCourse;
