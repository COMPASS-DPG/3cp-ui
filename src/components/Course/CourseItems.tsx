import { CourseType } from '@/app/my-courses/page';

import SingleCourse from './SingleCourse';

const CourseItems = ({
  activeComponenet,
  courseList,
}: {
  activeComponenet: string;
  courseList: CourseType[];
}) => {
  return (
    <div className='flex flex-col gap-2.5'>
      {courseList.map((course) => {
        return (
          <SingleCourse
            key={course.courseid}
            activeComponenet={activeComponenet}
            course={course}
          />
        );
      })}
    </div>
  );
};
export default CourseItems;
