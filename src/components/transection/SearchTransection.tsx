'use client';

import ButtonFill from '@/components/button/ButtonFill';
import SearchInput from '@/components/inputtag/SearchInput';
import DatePickerComponent from '@/components/transection/DatePickerComponent';

import { searchInputType } from '@/app/transections/page';

const SearchTransection = ({
  searchInput,
  setSearchInput,
  handleSearch,
  showSearch,
  setShowSearch,
  totalIncome,
}: {
  searchInput: searchInputType;
  setSearchInput: (searchInput: searchInputType) => void;
  handleSearch: () => void;
  showSearch: boolean;
  setShowSearch: (arg: boolean) => void;
  totalIncome: number;
}) => {
  const handleTextChange = (value: string) => {
    if (!showSearch) setShowSearch(true);
    setSearchInput({
      ...searchInput,
      text: value,
    });
  };

  const handleDateChange = (date: Date) => {
    if (!showSearch) setShowSearch(true);
    setSearchInput({
      ...searchInput,
      date: date,
    });
  };

  return (
    <div className='flex justify-between'>
      <div className='flex gap-7'>
        <div>
          <SearchInput
            placeholder='Search Course'
            onChange={handleTextChange}
            value={searchInput.text}
          />
        </div>
        <DatePickerComponent
          data={searchInput.date}
          onChange={handleDateChange}
        />
        <div>
          <ButtonFill classes='bg-[#385B8B]' onClick={handleSearch}>
            {showSearch ? 'Search' : 'Reset'}
          </ButtonFill>
        </div>
      </div>

      <div className='w-[250px] border  border-[#FFE073] bg-[#FFF7DA] p-5 '>
        <p className='pb-3 text-[16px] font-medium text-[#272728]'>
          Total Credits Income
        </p>
        <p className='text-[24px] font-bold text-[#385B8B]'>
          Cr. {totalIncome}
        </p>
      </div>
    </div>
  );
};
export default SearchTransection;
