'use client';
import React from 'react';

import { USER_OPTIONS } from '@/components/SelectOptions';

import { SearchInputType } from '../components/Course/ApprovedCourses';

type PropType = {
  value: SearchInputType;
  onChange: (arg: SearchInputType) => void;
  handleSearch: () => void;
};

import ButtonFill from './button/ButtonFill';
import SearchInput from './inputtag/SearchInput';
import SelectTag from './inputtag/SelectTag';
import { SearchIcon } from '../../public/svg';

const SearchUser = ({ value, onChange, handleSearch }: PropType) => {
  return (
    <div className='my-7 flex flex-wrap gap-3'>
      <SearchInput
        value={value.user}
        onChange={(updatedValue) => onChange({ ...value, user: updatedValue })}
        placeholder='Search Course by title'
        width='480px'
      />
      <SelectTag
        options={USER_OPTIONS}
        value={value?.department}
        onChange={(updatedValue) =>
          onChange({ ...value, department: updatedValue })
        }
        width='350px'
        placeholder='Department'
        paddingY='2px'
      />
      <SelectTag
        options={USER_OPTIONS}
        value={value?.department}
        onChange={(updatedValue) =>
          onChange({ ...value, department: updatedValue })
        }
        width='150px'
        placeholder='Department'
        paddingY='2px'
      />
      <ButtonFill onClick={handleSearch} classes='bg-[#385B8B] w-[120px]'>
        <div className='flex justify-between'>
          <SearchIcon className='w-[18px]' />
          <span>Search</span>
        </div>
      </ButtonFill>
    </div>
  );
};

export default SearchUser;
