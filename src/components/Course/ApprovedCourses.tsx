import { useState } from 'react';

import { outfit } from '@/components/FontFamily';

import { CourseItems } from '../Course';
import SearchCourses from '../SearchCourses';

export type SearchInputType = {
  user: string;
  department: string;
  language: string;
};
const getEmptyValue = () => {
  return { user: '', department: '', language: '' };
};

const ApprovedCourses = ({
  activeComponenet,
}: {
  activeComponenet: string;
}) => {
  const [input, setInput] = useState<SearchInputType>(getEmptyValue());
  const handleSearch = () => {
    //  do somethind here
  };
  return (
    <div className={`mx-7 ${outfit.className}`}>
      <SearchCourses
        value={input}
        onChange={setInput}
        handleSearch={handleSearch}
      />

      <p className='my-2 text-[18px] font-medium leading-5 text-[#65758C]'>
        15 Courses
      </p>
      <CourseItems activeComponenet={activeComponenet} />
      {/* in case of no item show below item */}
      {/* <div className="mx-7  flex justify-center flex-col items-center gap-2">
        <EmptyBox width="160px" />
        <p className="text-[#272728] text-center font-outfit text-base font-normal">
          No courses added yet!
        </p>
      </div> */}
    </div>
  );
};
export default ApprovedCourses;
