import { useState } from 'react';

import CourseItems from '@/components/Course/CourseItems';
import NoCoursesAdded from '@/components/Course/NoCoursesAdded';
import { outfit } from '@/components/FontFamily';

import { CourseType } from '@/app/my-courses/page';

import SearchCourses from '../SearchCourses';

export type SearchInputType = {
  user: string;
  department: string;
  language: string;
};
const getEmptyValue = () => {
  return { user: '', department: '', language: '' };
};

const CourseSection = ({
  activeComponenet,
  courseList,
  handleFetchData,
}: {
  activeComponenet: string;
  courseList: CourseType[];
  handleFetchData: () => void;
}) => {
  const [input, setInput] = useState<SearchInputType>(getEmptyValue());
  const handleSearch = () => {
    //   // filter based on the  input
    //   //filter from above courseList and set in present course list
    //   // console.log(input);
    //   // setFilterCourse([]);
  };

  return (
    <div className={`mx-7 ${outfit.className}`}>
      {courseList.length !== 0 ? (
        <div>
          <SearchCourses
            value={input}
            onChange={setInput}
            handleSearch={handleSearch}
          />

          <p className='my-2 text-[18px] font-medium leading-5 text-[#65758C]'>
            {courseList?.length} Courses
          </p>
          <CourseItems
            handleFetchData={handleFetchData}
            activeComponenet={activeComponenet}
            courseList={courseList}
          />
        </div>
      ) : (
        <NoCoursesAdded />
      )}

      {/* in case of no item show below item */}
    </div>
  );
};
export default CourseSection;
