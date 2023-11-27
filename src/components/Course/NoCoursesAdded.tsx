import React from 'react';

import { EmptyBox } from '~/svg';

const NoCoursesAdded = () => {
  return (
    <div className='mx-7 flex flex-col items-center justify-center gap-2 pt-[200px]'>
      <EmptyBox width='160px' />
      <p className='font-outfit text-center text-base font-normal text-[#272728]'>
        No courses added yet!
      </p>
    </div>
  );
};

export default NoCoursesAdded;
