import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

type PropsType = {
  handleLimit: (value: number) => void;
  limit: number;
  total: number;
  page: number;
  handlePage: (value: number) => void;
};

const Pagination = ({
  handleLimit,
  limit,
  total,
  page,
  handlePage,
}: PropsType) => {
  const [pageNumber, setPageNumber] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handlePage(parseInt(pageNumber));
      setPageNumber('');
    }
  };

  return (
    <div className='flex items-center justify-between bg-white p-2'>
      <div>
        <select
          className='block w-[150px] rounded-lg border border-gray-300 bg-[#EEEEEE] px-2
           py-1 text-sm text-gray-900 focus:border-blue-400 focus:ring-blue-400'
          value={limit}
          onChange={(e) => handleLimit(parseInt(e?.target?.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </div>
      <div className='flex items-center justify-between gap-4 '>
        <button
          className='cursor-pointer rounded-full bg-[#EEEEEE] p-2 hover:bg-gray-200'
          disabled={page <= 1}
          onClick={() => handlePage(page - 1)}
        >
          <MdOutlineKeyboardArrowLeft className='w-[18px]' />
        </button>
        <div>
          Result {limit * page - limit + 1}-{limit * page} of {total}
        </div>
        <button
          className='cursor-pointer rounded-full bg-[#EEEEEE] p-2  hover:bg-gray-200'
          disabled={page >= total / limit}
          onClick={() => handlePage(page + 1)}
        >
          <MdOutlineKeyboardArrowRight className='w-[18px]' />
        </button>
      </div>
      <div>
        <span>Go to: </span>
        <input
          type='number'
          onWheel={(e) => e?.currentTarget?.blur}
          className='w-[80px] rounded-lg border border-gray-300 bg-[#EEEEEE] px-2 py-1 text-sm text-gray-900'
          placeholder='EG:14'
          value={pageNumber}
          onChange={(e) => setPageNumber(e?.target?.value)}
          onKeyUp={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default Pagination;
