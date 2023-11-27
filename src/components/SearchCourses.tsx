'use client';
import React from 'react';

import {
  COMPETENCY_OPTIONS,
  LANGUAGE_OPTIONS,
} from '@/components/SelectOptions';

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
};

const SearchCourse = ({
  value,
  onChange,
  handleSearch,
  showSearch,
}: PropType) => {
  return (
    <div className='my-7 flex flex-wrap gap-3'>
      <SearchInput
        value={value.title}
        onChange={(updatedValue) => onChange({ ...value, title: updatedValue })}
        placeholder='Search Course by title'
      />
      <SelectTag
        options={COMPETENCY_OPTIONS}
        value={value?.competency}
        onChange={(updatedValue) =>
          onChange({ ...value, competency: updatedValue })
        }
        width='350px'
        placeholder='Competency'
        paddingY='2px'
      />
      <SelectTag
        options={LANGUAGE_OPTIONS}
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
