import Image from 'next/image';
import React from 'react';
import { FaUserEdit } from 'react-icons/fa';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';

import { NewCourseFormType } from '@/app/add-new-course/page';
type PropType = {
  image: string;
  data: NewCourseFormType;
  onClose: () => void;
  handleSuccessModal: () => void;
};

const CourseCard = ({ image, data, onClose, handleSuccessModal }: PropType) => {
  const languageColor = [
    { bg: '#DAFFDA', text: '#4ACB5F' },
    { bg: '#C7DEFF', text: '#385B8B' },
  ];

  const handleSend = () => {
    // const competency=data.competency.reduce((result, item) => {
    //   const { competency, levels } = item;
    //   result[competency] = levels.map(level => level); // Convert levels to uppercase if needed
    //   return result;
    // }, {});
    onClose();
    handleSuccessModal();
  };

  return (
    <div className='p-3'>
      <div
        className='m-auto max-w-sm rounded-lg border border-gray-200 bg-white p-[10px] shadow
       dark:border-gray-700 dark:bg-gray-800'
      >
        <div className='flex gap-2'>
          <div>
            <Image
              className='rounded-lg'
              src={`data:image/jpeg;base64,${image}`}
              alt='img'
              width={70}
              height={70}
            />
          </div>
          <div>
            <div className='line-clamp-1 text-ellipsis text-[15px] font-bold text-[#272728] '>
              {data.title}
            </div>
            <div className='line-clamp-2 text-[13px] text-[#787878]'>
              {data?.competency?.map((item) => {
                return (
                  <div
                    key={item?.competency}
                    className='line-clamp-1 text-ellipsis'
                  >
                    {item.competency}(
                    {item?.levels?.map((level) => {
                      return <span key={level}>{level}, </span>;
                    })}
                    ),
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='my-[10px] flex gap-2'>
          <span>
            <FaUserEdit size={20} className='text-[#385B8B]' />
          </span>
          <span className='text-[13px] font-medium text-[#385B8B]'>
            {data?.author}
          </span>

          {data.language.map((item, i) => {
            return (
              <span
                key={item}
                className={`text-[${languageColor[i % 2].text}] bg-[${
                  languageColor[i % 2].bg
                }] rounded-lg px-[10px] `}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className='text-[16px] font-semibold text-[#272728]'>
          Cr.{data.credits}
        </div>
      </div>
      <div className='my-[30px] px-[100px] text-center text-[16px] text-[#272728]'>
        This a preview of the course card in Marketplace, the course will get
        live post admin approval
      </div>
      <div className='mt-[40px] flex justify-center gap-5 '>
        <ButtonOutline
          classes='border-[#26292D] text-[#26292D] '
          onClick={onClose}
        >
          Edit
        </ButtonOutline>
        <ButtonFill onClick={handleSend} classes='bg-[#26292D] '>
          Send to Admin for verification
        </ButtonFill>
      </div>
    </div>
  );
};

export default CourseCard;
