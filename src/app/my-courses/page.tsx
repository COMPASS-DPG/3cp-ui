'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import CoursesNavbar from '@/components/navbar/CoursesNavbar';
import DontWorryPopUp from '@/components/popUps/DontWorryPopUp';

import { ApprovedCourses } from '../../components/Course';

// const getinitialValule = () => {
//   return [
//     {
//       courseid: 'CS101',
//       courseName:
//         'Introduction to Computer Science and Programming Principles for Beginners',
//       levels: [
//         'Basic programming concepts and syntax',
//         'Intermediate programming techniques',
//         'Advanced topics in computer science',
//       ],
//       author: 'John Doe',
//       languages: ['English', 'Spanish'],
//       credit: 80,
//       rating: 4.2,
//       status: 'verified',
//       archived: false,
//     },
//   ];
// };

export type CourseType = {
  courseid: string;
  courseName: string;
  levels: string[];
  author: string;
  languages: string[];
  credit: number;
  rating: number;
  status: string;
  archived: boolean;
};

const MyCourses = () => {
  const [activeComponent, setActiveComponent] =
    useState<string>('approvedSection');
  const [activePopUp, setActivePopUp] = useState(false);
  const [courseList, setCourseList] = useState<CourseType[]>([]);
  const [currentCourseList, setCurrentCourseList] = useState<CourseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:3001/user1');
      const CompleteList = response.data[0].courses;
      const filteredResult = CompleteList.filter(
        (course: CourseType) => course.status === 'verified'
      );
      setCurrentCourseList(filteredResult); // Store the filtered data in the state
      setCourseList(CompleteList);
    };

    fetchData();
  }, []);

  const filterCourse = (courseType: string) => {
    const filteredResult = courseList.filter((course: CourseType) => {
      if (courseType === 'archived') {
        return course.archived === true;
      } else {
        return course.status === courseType;
      }
    });
    setCurrentCourseList(filteredResult);
  };

  const handleActiveComponent = (componentName: string) => {
    setActiveComponent(componentName);
  };
  return (
    <div className='relative h-full bg-[#F7F9FC]'>
      <DontWorryPopUp visible={activePopUp} handleVisibility={setActivePopUp} />
      <CoursesNavbar
        activeComponent={activeComponent}
        handleActiveComponent={handleActiveComponent}
        handlePopUp={setActivePopUp}
        filterCourse={filterCourse}
      />

      <div className='h-full'>
        {activeComponent === 'approvedSection' && (
          <ApprovedCourses
            activeComponenet={activeComponent}
            courseList={currentCourseList}
          />
        )}
        {activeComponent === 'pendingSection' && (
          <ApprovedCourses
            activeComponenet={activeComponent}
            courseList={currentCourseList}
          />
        )}
        {activeComponent === 'rejectedSection' && (
          <ApprovedCourses
            activeComponenet={activeComponent}
            courseList={currentCourseList}
          />
        )}
        {activeComponent === 'archivedSection' && (
          <ApprovedCourses
            activeComponenet={activeComponent}
            courseList={currentCourseList}
          />
        )}
      </div>
    </div>
  );
};
export default MyCourses;
