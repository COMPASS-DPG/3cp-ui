'use client';

import SearchInput from '@/components/inputtag/SearchInput';
import DatePickerComponent from '@/components/transection/DatePickerComponent';

import { searchInputType } from '@/app/transections/page';

const SearchTransection = ({
  searchInput,
  setSearchInput,
}: {
  searchInput: searchInputType;
  setSearchInput: (searchInput: searchInputType) => void;
}) => {
  const handleTextChange = (value: string) => {
    setSearchInput({
      ...searchInput,
      text: value,
    });
  };

  const handleDateChange = (date: Date) => {
    setSearchInput({
      ...searchInput,
      date: date,
    });
  };

  return (
    <div className='flex justify-between'>
      <div className='flex gap-7'>
        <SearchInput
          width='350px'
          placeholder='Search Course'
          onChange={handleTextChange}
          value={searchInput.text}
        />
        <DatePickerComponent
          data={searchInput.date}
          onChange={handleDateChange}
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
