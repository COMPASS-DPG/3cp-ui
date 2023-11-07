import React from 'react';

import CourseCreditInput from '@/components/inputtag/CourseCreditInput';
import DatePickerComponent from '@/components/inputtag/DatePickerComponent';
import ImageUpload from '@/components/inputtag/ImageUpload';
import InputTag from '@/components/inputtag/InputTag';
import MultiSelectTag from '@/components/inputtag/MultiSelectTag';
import TextAreaTag from '@/components/inputtag/TextAreaTag';
import Label from '@/components/Label';
import { languageOptions } from '@/components/Options';

import {
  NewCourseFormErrorType,
  NewCourseFormType,
} from '@/app/add-new-course/page';

type PropType = {
  error: NewCourseFormErrorType;
  data: NewCourseFormType;
  onChange: (key: string, value: string | Date | File | string[]) => void;
  image: string;
  handleImage: (arg: string) => void;
};

const NewCourseForm = ({
  error,
  data,
  onChange,
  image,
  handleImage,
}: PropType) => {
  return (
    <>
      <div className='flex w-[80%] flex-wrap justify-between gap-4'>
        <div className='w-[100%] lg:w-[49%]'>
          <div className=' my-[15px]'>
            <Label text='Course Name' />
            <InputTag
              onChange={(value) => onChange('courseName', value)}
              value={data.courseName}
              placeholder='Enter Course Name'
              errorMessage={error?.courseName}
            />
          </div>
          <div className='mb-[15px]'>
            <Label text='Overview' />
            <TextAreaTag
              value={data.overview}
              onChange={(value) => onChange('overview', value)}
              placeholder='Enter overview'
              errorMessage={error?.overview}
            />
          </div>
        </div>
        <div className=' my-[15px] w-[100%] lg:w-[49%]'>
          <Label text='Course Image' />
          <ImageUpload
            errorMessage={error?.courseImage}
            onChange={(value) => onChange('courseImage', value)}
            value={data?.courseImage}
            image={image}
            handleImage={handleImage}
          />
        </div>
      </div>
      <div className='grid w-[80%] grid-cols-1 gap-4 lg:grid-cols-2'>
        <div>
          <Label text='Course Language' />
          <MultiSelectTag
            errorMessage={error?.courseLanguages}
            onChange={(value) => onChange('courseLanguages', value)}
            options={languageOptions}
            placeholder=''
            value={data?.courseLanguages}
            paddingY='2px'
          />
        </div>
        <div>
          <Label text='Set Course Credit' />
          <CourseCreditInput
            value={data?.courseCredit}
            errorMessage={error?.courseCredit}
            onChange={(value) => onChange('courseCredit', value)}
          />
        </div>
        <div>
          <Label text='Course Link' />
          <InputTag
            value={data?.courseLink}
            type='url'
            onChange={(value) => onChange('courseLink', value)}
            placeholder='Enter Course Link'
            errorMessage={error.courseLink}
          />
        </div>
        <div>
          <Label text='Author' />
          <InputTag
            value={data?.author}
            onChange={(value) => onChange('author', value)}
            placeholder='Enter Author Name'
            errorMessage={error.author}
          />
        </div>
        <div>
          <Label text='Start Date' />
          <DatePickerComponent
            data={new Date(data.startDate)}
            onChange={(date) => onChange('startDate', date)}
            isSelectStart={true}
            startDate={new Date(data.startDate)}
            endDate={data.endDate}
            errorMessage={error?.startDate}
          />
        </div>
        <div>
          <Label text='End Date' />
          <DatePickerComponent
            data={data.endDate}
            onChange={(date) => onChange('endDate', date)}
            isSelectEnd={true}
            startDate={new Date(data.startDate)}
            endDate={data.endDate}
            minDate={new Date(data.startDate)}
            errorMessage={error.endDate}
          />
        </div>
      </div>
    </>
  );
};

export default NewCourseForm;
