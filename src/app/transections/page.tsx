'use client';

import SearchTransection from '@/components/transection/SearchTransection';
import TransectionTable from '@/components/transection/TransectionTable';

export type SearchInputType = {
  course: string;
  startDate: Date;
};

const Transections = () => {
  return (
    <div className='p-5'>
      <SearchTransection />
      <TransectionTable />
    </div>
  );
};
export default Transections;
