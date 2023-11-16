import { useEffect, useState } from 'react';

import { outfit } from '@/components/FontFamily';

import { CourseType } from '@/app/my-courses/page';

import { CourseItems } from '../Course';
import SearchCourses from '../SearchCourses';

import { EmptyBox } from '~/svg';

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
  courseList,
}: {
  activeComponenet: string;
  courseList: CourseType[];
}) => {
  const [input, setInput] = useState<SearchInputType>(getEmptyValue());
  const [filterCourse, setFilterCourse] = useState<CourseType[]>([]);
  const handleSearch = () => {
    //   // filter based on the  input
    //   //filter from above courseList and set in present course list
    //   // console.log(input);
    //   // setFilterCourse([]);
  };

  useEffect(() => {
    setFilterCourse(courseList);
  }, [courseList]);
  return (
    <div className={`mx-7 ${outfit.className}`}>
      {filterCourse.length !== 0 ? (
        <div>
          <SearchCourses
            value={input}
            onChange={setInput}
            handleSearch={handleSearch}
          />

          <p className='my-2 text-[18px] font-medium leading-5 text-[#65758C]'>
            {courseList.length} Courses
          </p>
          <CourseItems
            activeComponenet={activeComponenet}
            courseList={filterCourse}
          />
        </div>
      ) : (
        <div className='mx-7  flex h-[400px] flex-col items-center justify-center gap-2'>
          <EmptyBox width='160px' />
          <p className='font-outfit text-center text-base font-normal text-[#272728]'>
            No courses added yet!
          </p>
        </div>
      )}

      {/* in case of no item show below item */}
    </div>
  );
};
export default ApprovedCourses;
