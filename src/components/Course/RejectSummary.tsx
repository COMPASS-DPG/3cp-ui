import { outfit } from '@/components/FontFamily';

const RejectSummary = () => {
  return (
    <div
      className={`flex rounded-lg border border-[#D4D4D4] bg-[#FFEFEF] p-2 text-[14px] ${outfit.className} `}
    >
      <div className='whitespace-nowrap pr-2  font-semibold capitalize text-[#272728]'>
        Rejection Reason:
      </div>

      <div className='text-[##787878]'>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo con Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore{' '}
      </div>
    </div>
  );
};
export default RejectSummary;
