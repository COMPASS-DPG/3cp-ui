import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import MultiSelectTag from '@/components/inputtag/MultiSelectTag';
import SelectTag from '@/components/inputtag/SelectTag';
import Label from '@/components/Label';
import { languageOptions } from '@/components/Options';

import { CompetencyAndLevelsType } from '@/app/add-new-course/page';

type PropType = {
  handleDelete: () => void;
  data: CompetencyAndLevelsType;
  length: number;
  index: number;
  handleAdd: () => void;
  onChange: (arg: CompetencyAndLevelsType) => void;
};

const AddCompetencyAndLevel = ({
  handleDelete,
  length,
  index,
  handleAdd,
  data,
  onChange,
}: PropType) => {
  const handleChange = (key: string, value: string | string[]) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className='my-[15px] flex items-end gap-4'>
      <div className='grid w-[920px] grid-cols-1 gap-4  lg:grid-cols-2'>
        <div>
          <Label text='Competency' />
          <SelectTag
            errorMessage=''
            onChange={(value) => handleChange('competency', value)}
            options={languageOptions}
            placeholder=''
            value={data?.competency}
            paddingY='2px'
          />
        </div>
        <div>
          <Label text='Levels' />
          <div className='flex items-center gap-2'>
            <div
              className={` ${
                index === length - 1 && length >= 2 ? 'w-[973px]' : 'w-full'
              }`}
            >
              <MultiSelectTag
                errorMessage=''
                onChange={(value) => handleChange('levels', value)}
                options={languageOptions}
                placeholder=''
                value={data?.levels}
                paddingY='2px'
                isDisabled={!data.competency}
              />
            </div>
            {length >= 2 && (
              <div
                className='cursor-pointer rounded-lg bg-[#FEECEC] p-2'
                onClick={handleDelete}
              >
                <RiDeleteBin5Fill size={24} className='text-[#F24F4F] ' />
              </div>
            )}
          </div>
        </div>
      </div>
      {index === length - 1 && (
        <div
          className='h-[40px] cursor-pointer rounded-lg bg-[#385B8B] p-2'
          onClick={handleAdd}
        >
          <AiOutlinePlus size={24} className='text-white' />
        </div>
      )}
    </div>
  );
};

export default AddCompetencyAndLevel;