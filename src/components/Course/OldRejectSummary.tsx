import { BiSolidPencil } from 'react-icons/bi';

import { GreenTick, RedCross } from '~/svg';
const RejectSummary = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <p className='text-[18px] font-semibold leading-6 text-[#272728] underline'>
          Approved/Rejected Summary
        </p>
        <button className='flex items-center gap-2 rounded-md border border-[#4ACB5F] px-2 text-[14px] text-[#272728]'>
          <BiSolidPencil /> Edit Course
        </button>
      </div>
      <div className='mt-2 flex justify-between'>
        <p className='flex gap-1'>
          <GreenTick width='16px' /> Course image
        </p>
        <p className='flex gap-1'>
          <GreenTick width='16px' /> Course Title
        </p>
        <p className='flex gap-1'>
          <GreenTick width='16px' /> Course Overview (Description of the course)
        </p>
        <p className='flex gap-1'>
          <GreenTick width='16px' /> Course Languages
        </p>
      </div>

      <div className='my-3 text-[16px] font-semibold leading-5 text-[#272728]'>
        Competencies
      </div>
      <div className='grid grid-cols-2 gap-5 text-[16px]'>
        {/* grid first item */}
        <div className='flex flex-col gap-4 rounded-lg border border-[#D4D4D4] bg-[#FFF6F6] p-2'>
          <p className='font-medium text-[#272728]'>Pregnancy Identification</p>
          {/* level 1 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <RedCross width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 1 :{' '}
              </span>
              Understands health of males and females and initial assessment
              protocols
            </div>
          </div>
          {/* level 2 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <RedCross width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
        </div>
        {/* grid second item */}
        <div className='flex flex-col gap-4 rounded-lg border border-[#D4D4D4] bg-[#FFF] p-2'>
          <p className='font-medium text-[#272728]'>
            Birth Planning and preparedness for PW
          </p>
          {/* level 1 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 1 :{' '}
              </span>
              Understands health of males and females and initial assessment
              protocols
            </div>
          </div>
          {/* level 2 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
          {/* level 3 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
        </div>
        {/* grid third item */}
        <div className='flex flex-col gap-4 rounded-lg border border-[#D4D4D4] bg-[#FFF] p-2'>
          <p className='font-medium text-[#272728]'>
            Birth Planning and preparedness for PW
          </p>
          {/* level 1 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 1 :{' '}
              </span>
              Understands health of males and females and initial assessment
              protocols
            </div>
          </div>
          {/* level 2 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
          {/* level 3 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
        </div>
        {/* grid fourth item */}
        <div className='flex flex-col gap-4 rounded-lg border border-[#D4D4D4] bg-[#FFF] p-2'>
          <p className='font-medium text-[#272728]'>
            Birth Planning and preparedness for PW
          </p>
          {/* level 1 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 1 :{' '}
              </span>
              Understands health of males and females and initial assessment
              protocols
            </div>
          </div>
          {/* level 2 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
          {/* level 3 */}
          <div className='flex  gap-2 '>
            <div className='pt-1.5'>
              <GreenTick width='16px' />
            </div>
            <div className='text-[#606060] '>
              <span className='whitespace-nowrap font-semibold '>
                Level 2 :{' '}
              </span>
              Identifies pregnancy using Nischaya Kit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RejectSummary;
