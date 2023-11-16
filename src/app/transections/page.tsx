'use client';

import { useEffect, useState } from 'react';

import SearchTransection from '@/components/transection/SearchTransection';
import TransectionTable from '@/components/transection/TransectionTable';

export type searchInputType = {
  text: string;
  date: Date | null;
};
const Transections = () => {
  const [searchInput, setSearchInput] = useState<searchInputType>({
    text: '',
    date: null,
  });

  useEffect(() => {
    // console.log(searchInput);
  }, [searchInput]);
  return (
    <div className='p-5'>
      <SearchTransection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <TransectionTable />
    </div>
  );
};
export default Transections;
