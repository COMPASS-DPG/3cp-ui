import React from 'react';

import { capitalizeName } from '@/components/capitalizeName';
import CourseCreditInput from '@/components/inputtag/CourseCreditInput';
import DatePickerComponent from '@/components/inputtag/DatePickerComponent';
import ImageUpload from '@/components/inputtag/ImageUpload';
import InputTag from '@/components/inputtag/InputTag';
import MultiSelectCreatable from '@/components/inputtag/MultiSelectCreatable';
import TextAreaTag from '@/components/inputtag/TextAreaTag';
import Label from '@/components/Label';
import { languageOptions } from '@/components/Options';

import {
  NewCourseFormErrorType,
  NewCourseFormType,
} from '@/app/my-courses/[add-course]/page';

// import {
//   NewCourseFormErrorType,
//   NewCourseFormType,
// } from '@/app/add-new-course/page';

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
      <div className='flex flex-wrap justify-between gap-4'>
        <div className='w-[100%] lg:w-[49%]'>
          <div className=' my-[15px]'>
            <Label text='Course Name' />
            <InputTag
              onChange={(value) => onChange('title', value)}
              value={data.title}
              placeholder='Enter Course Name'
              errorMessage={error?.title}
            />
          </div>
          <div className='mb-[15px]'>
            <Label text='Overview' />
            <TextAreaTag
              value={data.description}
              onChange={(value) => onChange('description', value)}
              placeholder='Enter overview'
              errorMessage={error?.description}
            />
          </div>
        </div>
        <div className=' my-[15px] w-[100%] lg:w-[49%]'>
          <Label text='Course Image' />
          <ImageUpload
            errorMessage={error?.imgLink}
            onChange={(value) => onChange('imgLink', value)}
            value={data?.imgLink}
            image={image}
            handleImage={handleImage}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div>
          <Label text='Course Language' />
          <MultiSelectCreatable
            errorMessage={error?.language}
            onChange={(value) => onChange('language', value)}
            options={languageOptions}
            placeholder='select language'
            value={data?.language}
            paddingY='2px'
          />
        </div>
        <div>
          <Label text='Set Course Credit' />
          <CourseCreditInput
            value={data?.credits}
            errorMessage={error?.credits}
            onChange={(value) => onChange('credits', value)}
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
            onChange={(value) => onChange('author', capitalizeName(value))}
            placeholder='Enter Author Name'
            errorMessage={error.author}
          />
        </div>
        <div>
          <Label text='Start Date' />
          <DatePickerComponent
            data={data.startDate ? new Date(data.startDate) : null}
            onChange={(date) => onChange('startDate', date)}
            isSelectStart={true}
            startDate={
              data?.startDate !== null ? new Date(data?.startDate) : null
            }
            endDate={data.endDate}
            errorMessage={error?.startDate}
          />
        </div>
        <div>
          <Label text='End Date' />
          <DatePickerComponent
            data={data.endDate ? new Date(data.endDate) : null}
            onChange={(date) => onChange('endDate', date)}
            isSelectEnd={true}
            startDate={
              data?.startDate !== null ? new Date(data?.startDate) : null
            }
            endDate={data.endDate}
            minDate={
              data?.startDate !== null ? new Date(data?.startDate) : null
            }
            errorMessage={error.endDate}
          />
        </div>
      </div>
    </>
  );
};

export default NewCourseForm;
