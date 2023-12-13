'use client';
import React from 'react';

import { CourseType } from '@/app/my-courses/page';

import ButtonFill from './button/ButtonFill';
import { SearchInputType } from './Course/CourseSection';
import SearchInput from './inputtag/SearchInput';
import SelectTag from './inputtag/SelectTag';
import { SearchIcon } from '../../public/svg';

type PropType = {
  value: SearchInputType;
  onChange: (arg: SearchInputType) => void;
  handleSearch: () => void;
  showSearch: boolean;
  courseList: CourseType[];
};

const getLanguageOptions = (courseList: CourseType[]) => {
  // Use Set to store unique values
  const uniqueLanguages = new Set<string>();

  // Iterate over each object and its language array, and add languages to the Set
  courseList?.forEach((obj) => {
    if (obj?.language && Array.isArray(obj?.language)) {
      obj?.language?.forEach((language: string) => {
        uniqueLanguages.add(language);
      });
    }
  });

  // Convert Set back to an array
  const LANGUAGE_OPTIONS = Array.from(uniqueLanguages)?.map((item) => {
    return { label: item, value: item };
  });
  return LANGUAGE_OPTIONS;
};

const getCompetenciesList = (courseList: CourseType[]) => {
  const uniqueCompetencies = new Set<string>();

  courseList?.forEach((obj) => {
    if (obj?.competency) {
      Object.keys(obj?.competency)?.forEach((competency) => {
        uniqueCompetencies.add(competency);
      });
    }
  });

  const COMPETENCY_OPTIONS = Array.from(uniqueCompetencies)?.map((item) => {
    return { label: item, value: item };
  });

  return COMPETENCY_OPTIONS;
};

const SearchCourse = ({
  value,
  onChange,
  handleSearch,
  showSearch,
  courseList,
}: PropType) => {
  return (
    <div className='my-7 flex flex-wrap gap-3'>
      <SearchInput
        value={value.title}
        onChange={(updatedValue) => onChange({ ...value, title: updatedValue })}
        placeholder='Search Course by title'
      />
      <SelectTag
        options={getCompetenciesList(courseList)}
        value={value?.competency}
        onChange={(updatedValue) =>
          onChange({ ...value, competency: updatedValue })
        }
        width='350px'
        placeholder='Competency'
        paddingY='2px'
      />
      <SelectTag
        options={getLanguageOptions(courseList)}
        value={value?.language}
        onChange={(updatedValue) =>
          onChange({ ...value, language: updatedValue })
        }
        width='150px'
        placeholder='Language'
        paddingY='2px'
      />
      <ButtonFill
        onClick={handleSearch}
        classes={`bg-[#385B8B] ${showSearch && 'w-[120px]'}`}
      >
        <div className='flex justify-between'>
          {showSearch ? (
            <>
              <SearchIcon className='w-[18px]' />
              <span>Search</span>
            </>
          ) : (
            'Reset'
          )}
        </div>
      </ButtonFill>
    </div>
  );
};

export default SearchCourse;
