import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import MultiSelectTag from '@/components/inputtag/MultiSelectTag';
import SelectTag from '@/components/inputtag/SelectTag';
import Label from '@/components/Label';
import { Competency_Options } from '@/components/Options';

import { CompetencyAndLevelsType } from '@/app/my-courses/[add-course]/page';
import { CompetencyType, LevelsType } from '@/app/my-courses/page';

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
  // will filter levels by competency
  const levels: LevelsType[] = Competency_Options.find(
    (item) => item.name === data.name
  )?.levels ?? [{ id: '', name: '', levelNumber: '' }];

  // will handle competency data
  const handleChangeCompetency = (value: CompetencyType) => {
    const updatedValue = {
      name: value?.name,
      id: value?.id,
      levels: [],
    };
    if (updatedValue) {
      onChange(updatedValue);
    }
  };

  // will handle levels data
  const handleChangeLevel = (value: string[]) => {
    let updatedValue: LevelsType[] | null = null;
    updatedValue = levels?.filter((option) => value?.includes(option?.name));
    if (updatedValue) {
      onChange({ ...data, levels: updatedValue });
    }
  };

  return (
    <div className='my-[15px] flex items-end gap-4'>
      <div className='grid w-[1000px] grid-cols-1 gap-4  lg:grid-cols-2'>
        <div>
          <Label text='Competency' />
          <SelectTag
            onChange={(value) =>
              handleChangeCompetency(
                Competency_Options?.find((item) => item?.name === value) ?? {
                  name: '',
                  id: '',
                  levels: [],
                }
              )
            }
            options={Competency_Options?.map((item) => {
              return { label: item?.name, value: item?.name };
            })}
            placeholder='select competency'
            value={data?.name}
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
                onChange={(value) => handleChangeLevel(value)}
                options={
                  levels?.map((item) => {
                    return { label: item.name, value: item.name };
                  }) ?? [{ label: '', value: '' }]
                }
                placeholder='select levels'
                value={data?.levels.map((level) => level?.name)}
                paddingY='2px'
                isDisabled={!data?.name}
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
