import CourseItems from '@/components/Course/CourseItems';
import NoCoursesAdded from '@/components/Course/NoCoursesAdded';
import { outfit } from '@/components/FontFamily';

import { CourseType } from '@/app/my-courses/page';

export type SearchInputType = {
  title: string;
  competency: string;
  language: string;
};

const CourseSection = ({
  activeComponenet,
  courseList,
  handleFetchData,
  isSearch,
}: {
  activeComponenet: string;
  courseList: CourseType[];
  handleFetchData: () => void;
  isSearch: boolean;
}) => {
  return (
    <div className={`mx-7 ${outfit.className}`}>
      {courseList?.length !== 0 ? (
        <div>
          <p className='my-2 text-[18px] font-medium leading-5 text-[#65758C]'>
            {courseList?.length} Courses
          </p>
          <CourseItems
            handleFetchData={handleFetchData}
            activeComponenet={activeComponenet}
            courseList={courseList}
          />
        </div>
      ) : isSearch ? (
        <NoCoursesAdded text='No Result found' />
      ) : (
        <NoCoursesAdded />
      )}

      {/* in case of no item show below item */}
    </div>
  );
};
export default CourseSection;
