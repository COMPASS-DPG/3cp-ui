'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CourseSection from '@/components/Course/CourseSection';
import CoursesNavbar from '@/components/navbar/CoursesNavbar';
import DontWorryPopUp from '@/components/popUps/DontWorryPopUp';

import { useAuthContext } from '@/context/AuthContext';
import { getCourseByProviderId } from '@/services/userServices';

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

type CompetencyType = {
  [key: number | string]: string[];
};

export type CourseType = {
  id: string;
  providerId: string;
  title: string;
  description: string;
  courseLink: string;
  imgLink: string;
  credits: number;
  startDate: Date | null;
  endDate: Date | null;
  levels: string[];
  author: string;
  status: 'UNARCHIVED' | 'ARCHIVED';
  language: string[];
  rating: number;
  verificationStatus: 'REJECTED' | 'ACCEPTED' | 'PENDING';
  rejectionReason: string;
  competency: CompetencyType;
  avgRating: number | string | null;
};

const MyCourses = () => {
  const { providerId, activeComponent, setActiveComponent } = useAuthContext();

  const [fetchData, setFetchData] = useState(true);

  const [activePopUp, setActivePopUp] = useState(false);
  const [courseList, setCourseList] = useState<CourseType[]>([]);
  const [currentCourseList, setCurrentCourseList] = useState<CourseType[]>([]);

  useEffect(() => {
    if (fetchData) {
      (async () => {
        try {
          const data = await getCourseByProviderId(providerId);
          const filteredResult = data.filter(
            (course: CourseType) =>
              course?.verificationStatus === activeComponent &&
              course.status === 'UNARCHIVED'
          );
          setCurrentCourseList(filteredResult); // Store the filtered data in the state
          setCourseList(data);
          setFetchData(false);
        } catch (error) {
          // Handle any errors that occur during the API call
          // eslint-disable-next-line no-console
          console.error('API call error:', error);
          toast.error('something went wrong');
        }
      })();
    }
  }, [providerId, setFetchData, fetchData, activeComponent]);

  const filterCourse = (courseType: string) => {
    const filteredResult = courseList.filter((course: CourseType) => {
      if (courseType === 'ARCHIVED') {
        return course.status === 'ARCHIVED';
      } else {
        return (
          course.verificationStatus === courseType &&
          course.status === 'UNARCHIVED'
        );
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
        <CourseSection
          handleFetchData={() => setFetchData(true)}
          activeComponenet={activeComponent}
          courseList={currentCourseList}
        />
      </div>
    </div>
  );
};
export default MyCourses;
