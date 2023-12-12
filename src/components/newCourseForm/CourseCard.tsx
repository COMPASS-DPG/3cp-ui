import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';

import { NewCourseFormType } from '@/app/my-courses/[add-course]/page';
import { useAuthContext } from '@/context/AuthContext';
import { addCourse, editCourse } from '@/services/userServices';

type PropType = {
  image: string;
  data: NewCourseFormType;
  onClose: () => void;
  handleSuccessModal: () => void;
};

const CourseCard = ({ image, data, onClose, handleSuccessModal }: PropType) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const pathname = usePathname();
  const isEdit = pathname.includes('edit-course');
  const { providerId, setFetchData } = useAuthContext();
  const languageColor = [
    { bg: '#DAFFDA', text: '#4ACB5F' },
    { bg: '#C7DEFF', text: '#385B8B' },
  ];

  const handleSend = () => {
    (async () => {
      setIsDisabled(true);
      // formatting competency data
      const updateCompetencyData = Object.fromEntries(
        data?.competency?.map((item) => [item.competency, item.levels])
      );
      const newData = { ...data, competency: updateCompetencyData };

      // converting data to FormData
      const formCourseData = new FormData();

      formCourseData.append('title', newData?.title);
      formCourseData.append('description', newData?.description);
      newData?.language?.forEach((language, index) => {
        formCourseData.append(`language[${index}]`, language);
      });

      if (typeof newData?.imageLink !== 'string')
        formCourseData.append('image', newData?.imageLink);

      formCourseData.append('credits', newData.credits.toString());
      formCourseData.append('courseLink', newData?.courseLink);
      formCourseData.append('author', newData?.author);
      if (newData.startDate)
        formCourseData.append(
          'startDate',
          new Date(newData?.startDate)?.toDateString()
        );
      if (newData.endDate)
        formCourseData.append(
          'endDate',
          new Date(newData?.endDate)?.toDateString()
        );

      formCourseData.append('competency', JSON.stringify(newData?.competency));

      // api request
      try {
        if (isEdit && data?.courseId) {
          await editCourse(providerId, data?.courseId, formCourseData);
        } else {
          await addCourse(providerId, formCourseData);
        }
        onClose();
        setFetchData(true);
        setIsDisabled(false);
        handleSuccessModal();
      } catch (error) {
        // Handle any errors that occur during the API call
        // eslint-disable-next-line no-console
        console.error('API call error:', error);
        toast.error('something went wrong', {
          draggable: false,
        });
      }
    })();
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
              src={
                image
                  ? `data:image/jpeg;base64,${image}`
                  : typeof data?.imageLink === 'string'
                  ? data?.imageLink
                  : ''
              }
              alt='img'
              width={70}
              height={70}
            />
          </div>
          <div>
            <div className='line-clamp-1 text-ellipsis text-[15px] font-bold text-[#272728] '>
              {data?.title}
            </div>
            <div className='line-clamp-2 text-[13px] text-[#787878]'>
              {data?.competency?.map((item) => {
                return (
                  <div
                    key={item?.competency}
                    className='line-clamp-1 text-ellipsis'
                  >
                    {item?.competency}(
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

          {data?.language?.map((item, i) => {
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
          Cr.{data?.credits}
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
        <ButtonFill
          disabled={isDisabled}
          onClick={handleSend}
          classes='bg-[#26292D]'
        >
          Send to Admin for verification
        </ButtonFill>
      </div>
    </div>
  );
};

export default CourseCard;
