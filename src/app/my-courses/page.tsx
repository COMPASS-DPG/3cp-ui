'use client';
import { useEffect, useState } from 'react';

import CourseSection, {
  SearchInputType,
} from '@/components/Course/CourseSection';
import { outfit } from '@/components/FontFamily';
import CoursesNavbar from '@/components/navbar/CoursesNavbar';
import DontWorryPopUp from '@/components/popUps/DontWorryPopUp';
import SearchCourse from '@/components/SearchCourses';

import { useAuthContext } from '@/context/AuthContext';

type CompetencyType = {
  [key: number | string]: string[];
};

export type CourseType = {
  id?: string;
  providerId?: string;
  title: string;
  description: string;
  courseLink: string;
  imgLink: string | File;
  credits: number | string;
  startDate: Date | null;
  endDate: Date | null;
  author: string;
  status?: 'UNARCHIVED' | 'ARCHIVED';
  language: string[];
  rating?: number;
  verificationStatus?: 'REJECTED' | 'ACCEPTED' | 'PENDING';
  rejectionReason?: string;
  competency: CompetencyType;
  avgRating?: number | string | null;
};

const getEmptyValue = () => {
  return { title: '', competency: '', language: '' };
};

const MyCourses = () => {
  const { activeComponent, setActiveComponent, setFetchData, courseList } =
    useAuthContext();

  const [activePopUp, setActivePopUp] = useState(false);
  const [currentCourseList, setCurrentCourseList] = useState<CourseType[]>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState(true);

  const [searchInput, setSearchInput] = useState<SearchInputType>(
    getEmptyValue()
  );

  const filterCourse = (courseType: string) => {
    const filteredResult = courseList?.filter((course: CourseType) => {
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

  const handleSearchInputChange = (value: SearchInputType) => {
    setShowSearch(true);
    setSearchInput(value);
  };

  const handleSearch = () => {
    if (
      !searchInput.competency &&
      !searchInput.language &&
      !searchInput.title
    ) {
      filterCourse(activeComponent);
      setShowSearch(true);
      setIsSearch(false);
      return;
    }

    const searchedData = courseList.filter((course: CourseType) => {
      const courseNameMatch =
        !searchInput?.title ||
        course.title.toLowerCase().includes(searchInput?.title?.toLowerCase());
      const languageMatch =
        !searchInput?.language ||
        course.language
          .map((item: string) => item.toLowerCase())
          .includes(searchInput?.language?.toLowerCase());
      const competencyMatch =
        !searchInput?.competency ||
        Object.keys(course?.competency)
          .map((item: string) => item.toLocaleLowerCase())
          .includes(searchInput?.competency?.toLowerCase());

      return (
        (competencyMatch &&
          courseNameMatch &&
          languageMatch &&
          course?.verificationStatus === activeComponent &&
          course.status === 'UNARCHIVED') ||
        (competencyMatch &&
          courseNameMatch &&
          languageMatch &&
          course.status === 'ARCHIVED' &&
          activeComponent == 'ARCHIVED')
      );
    });
    setCurrentCourseList(searchedData);
    setSearchInput(getEmptyValue());
    setShowSearch(false);
    setIsSearch(true);
  };

  useEffect(() => {
    const filteredResult = courseList?.filter(
      (course: CourseType) =>
        (course?.verificationStatus === activeComponent &&
          course.status === 'UNARCHIVED') ||
        (course.status === 'ARCHIVED' && activeComponent == 'ARCHIVED')
    );
    setCurrentCourseList(filteredResult); // Store the filtered data in the state
  }, [activeComponent, courseList]);
  return (
    <div className='h-full bg-[#F7F9FC]'>
      <DontWorryPopUp visible={activePopUp} handleVisibility={setActivePopUp} />
      <CoursesNavbar
        activeComponent={activeComponent}
        handleActiveComponent={handleActiveComponent}
        handlePopUp={setActivePopUp}
        filterCourse={filterCourse}
      />

      <div className='h-full'>
        {courseList.length !== 0 && (
          <div className={`mx-7 ${outfit.className}`}>
            <SearchCourse
              value={searchInput}
              onChange={handleSearchInputChange}
              handleSearch={handleSearch}
              showSearch={showSearch}
            />
          </div>
        )}
        <CourseSection
          handleFetchData={() => setFetchData(true)}
          activeComponenet={activeComponent}
          courseList={currentCourseList}
          isSearch={isSearch}
        />
      </div>
    </div>
  );
};
export default MyCourses;
