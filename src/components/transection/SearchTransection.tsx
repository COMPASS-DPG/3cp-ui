'use client';
import { useState } from 'react';

import SearchInput from '@/components/inputtag/SearchInput';

const SearchTransection = () => {
  const [input, setInput] = useState('');
  return (
    <div className='flex justify-between'>
      <div className='flex gap-7'>
        <SearchInput
          width='350px'
          placeholder='Search Course'
          onChange={setInput}
          value={input}
        />
        <SearchInput
          width='350px'
          placeholder='Search Course'
          onChange={setInput}
          value={input}
        />
      </div>
      <div className='w-[250px] border  border-[#FFE073] bg-[#FFF7DA] p-5 '>
        <p className='pb-3 text-[16px] font-medium text-[#272728]'>
          Total Credits Income
        </p>
        <p className='text-[24px] font-bold text-[#385B8B]'>Cr. 1,800,00</p>
      </div>
    </div>
  );
};
export default SearchTransection;
