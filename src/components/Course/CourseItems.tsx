import { CourseType } from '@/app/my-courses/page';

import SingleCourse from './SingleCourse';

const CourseItems = ({
  activeComponenet,
  courseList,
  handleFetchData,
}: {
  activeComponenet: string;
  courseList: CourseType[];
  handleFetchData: () => void;
}) => {
  return (
    <div className='flex flex-col gap-2.5'>
      {courseList?.map((course) => {
        return (
          <SingleCourse
            key={course?.id}
            activeComponenet={activeComponenet}
            course={course}
            handleFetchData={handleFetchData}
          />
        );
      })}
    </div>
  );
};
export default CourseItems;
