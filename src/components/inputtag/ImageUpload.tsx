'use client';
import Image from 'next/image';
import React, { MutableRefObject, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { fileToBase64Image } from '@/lib/helper';

type PropType = {
  onChange: (arg: File) => void;
  errorMessage: string;
  value: File | string;
  image: string;
  handleImage: (arg: string) => void;
};

const ImageUpload = ({
  onChange,
  errorMessage,
  value,
  image,
  handleImage,
}: PropType) => {
  const ImageInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleSelectImageClick = () => {
    ImageInputRef?.current?.click();
  };

  async function readImage(file: File) {
    onChange(file);
    fileToBase64Image(file, handleImage);
  }

  return (
    <>
      <div className='w-full'>
        <input
          type='file'
          ref={ImageInputRef}
          accept='image/*'
          onChange={(event) => {
            if (event?.target.files) {
              readImage(event.target.files[0]);
            }
          }}
          className='hidden'
        />

        {image || (value && typeof value === 'string') ? (
          <div className='flex'>
            <div className='rounded-lg border border-dashed border-[#D5D5D5] bg-gray-50 px-[68px] py-[10px]'>
              <Image
                src={
                  value && typeof value === 'string'
                    ? value
                    : `data:image/jpeg;base64,${image}`
                }
                alt='course img'
                width={200}
                height={200}
              />
            </div>
            <div className=' pl-[15px] pt-[50px]'>
              <div className='mb-3 text-[14px] text-[#385B8B]'>
                {typeof value !== 'string' && value?.name}
              </div>
              <div
                className='mb-3 flex cursor-pointer items-center justify-center gap-3'
                onClick={handleSelectImageClick}
              >
                <div className=' rounded-full bg-[#b5efbe] p-[6px] text-[#4ACB5F]'>
                  <FiUpload size={20} />
                </div>
                <div className='text-base font-semibold text-[#4ACB5F]'>
                  Change Course Image
                </div>
              </div>
              <div
                className='mb-3 flex cursor-pointer items-center justify-center gap-3'
                onClick={() => handleImage('')}
              >
                <div className=' cursor-pointer rounded-full bg-[#f4f4f4] p-2 text-[#F24F4F]'>
                  <RiDeleteBin5Fill size={20} />
                </div>
                <div className='text-base font-semibold text-[#F24F4F]'>
                  Delete Course Image
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`rounded-lg border border-dashed ${
              errorMessage ? 'border-red-500' : 'border-[#D5D5D5]'
            }
         cursor-pointer rounded-md bg-gray-50 px-[27px] py-[66px]`}
            onClick={handleSelectImageClick}
          >
            <div>
              <div className='flex items-center justify-center gap-3 '>
                <div className=' rounded-full bg-[#D5D5D5] p-2'>
                  <FiUpload size={30} />
                </div>{' '}
                <div className='text-lg font-semibold text-[#272728]'>
                  Upload Course Image
                </div>
              </div>
            </div>
            <div className='text-center text-base text-[#65758C]'>
              Maximum 5 MB. Upload .jpeg or .png, files.
            </div>
          </div>
        )}
      </div>
      {errorMessage && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default ImageUpload;
