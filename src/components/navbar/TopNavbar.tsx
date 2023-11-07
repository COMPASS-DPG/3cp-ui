import { USER_OPTIONS } from '@/components/SelectOptions';

import SelectTag from '../inputtag/SelectTag';
import { outfit } from '../../components/FontFamily';
import { BellLogo } from '../../../public/svg';

const TopNavbar = () => {
  return (
    <div className='inline-flex h-[76px] w-full items-center justify-between bg-white px-[30px] py-3.5'>
      <div className='flex items-center justify-start gap-2.5'>
        <div
          className={`text-2xl font-semibold text-slate-900 ${outfit.className}`}
        >
          My Courses
        </div>
      </div>
      {/* <div className="justify-start items-center gap-[45px] flex">
        <div className="justify-start items-start gap-[45px] flex">
          <div className="w-6 h-6 relative rounded-[5px]" />
        </div>
        <div className="h-12 pl-[7px] pr-[15px] py-1.5 bg-white rounded-[100px] border border-slate-200 justify-between items-center flex">
          <div className="justify-start items-center gap-3 flex">
            <img
              className="w-9 h-9 rounded-full border border-slate-200"
              src="https://via.placeholder.com/36x36"
            />
            <div className="text-slate-900 text-[15px] font-semibold font-['Manrope']">
              Unacademy
            </div>
          </div>
          <div className="w-[17px] h-[17px] relative" />
        </div>
      </div> */}
      <div className='flex gap-x-11'>
        <BellLogo className='w-[24px]' />
        <SelectTag
          options={USER_OPTIONS}
          onChange={() => null}
          placeholder='Unacademy'
          value=''
        />
      </div>
    </div>
  );
};
export default TopNavbar;
